import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(root, "public", "audio", "korean");
const manifestPath = path.join(root, "lib", "korean-audio-manifest.ts");
const metadataPath = path.join(root, ".cache", "korean-audio-manifest.json");
const apiKey = process.env.MIMO_API_KEY;
const baseUrl = (process.env.MIMO_BASE_URL ?? "https://token-plan-sgp.xiaomimimo.com/v1").replace(/\/$/, "");
const model = process.env.MIMO_TTS_MODEL ?? "mimo-v2.5-tts";

if (!apiKey) {
  console.error("Missing MIMO_API_KEY. Pass it as an environment variable; never commit it.");
  process.exit(1);
}

const entries = [];
const seen = new Set();
const add = (id, text) => {
  const clean = text.trim();
  if (!clean || seen.has(id)) return;
  seen.add(id);
  entries.push({ id, text: clean, file: `${id}.mp3` });
};

for (let number = 1; number <= 30; number++) {
  const padded = String(number).padStart(2, "0");
  const lessonId = `lesson-${padded}`;
  const source = await readFile(path.join(root, "lib", `korean-lesson-${padded}.ts`), "utf8");
  const dialogue = source.split("dialogue:")[1]?.split("vocabulary:")[0] ?? "";
  [...dialogue.matchAll(/korean:\s*"([^"]+)"/g)].forEach((match, index) => add(`${lessonId}-dlg-${index}`, match[1]));

  const practice = source.split("practice:")[1]?.split("summary:")[0] ?? "";
  const dictationBlock = practice.split('type: "dictation"')[1]?.split(/type:\s*"/)[0] ?? "";
  [...dictationBlock.matchAll(/answer:\s*"([^"]+)"/g)].forEach((match, index) => add(`${lessonId}-dictation-${index}`, match[1]));

  if (number === 30) {
    [...source.matchAll(/transcript:\s*"([^"]+)"/g)].forEach((match, index) => add(`mock-${index + 1}`, match[1]));
  }
}

const listening = JSON.parse(await readFile(path.join(root, "lib", "korean-listening-audio.json"), "utf8"));
Object.entries(listening).forEach(([id, text]) => add(id, text));

await mkdir(outputDir, { recursive: true });
await mkdir(path.dirname(metadataPath), { recursive: true });
let metadata = {};
try {
  metadata = JSON.parse(await readFile(metadataPath, "utf8"));
} catch {}

async function exists(file) {
  try { await access(file); return true; } catch { return false; }
}

async function synthesize(entry) {
  const filePath = path.join(outputDir, entry.file);
  if (await exists(filePath)) {
    const bytes = await readFile(filePath);
    metadata[entry.id] = { ...entry, sha256: createHash("sha256").update(bytes).digest("hex") };
    console.log(`skip ${entry.id}`);
    return;
  }

  let response;
  for (let attempt = 1; attempt <= 6; attempt++) {
    response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        messages: [
          { role: "user", content: "请用自然、清晰、适合初学者跟读的标准韩国语发音。不要添加原文之外的内容。" },
          { role: "assistant", content: entry.text }
        ],
        audio: { format: "mp3", voice: "mimo_default" }
      })
    });
    if (response.ok) break;
    if (response.status !== 429 || attempt === 6) {
      throw new Error(`${entry.id}: HTTP ${response.status} ${await response.text()}`);
    }
    const delay = attempt * 5000;
    console.warn(`rate limited on ${entry.id}; retrying in ${delay / 1000}s`);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  const json = await response.json();
  const audioBase64 = json.choices?.[0]?.message?.audio?.data;
  if (!audioBase64) throw new Error(`${entry.id}: response did not contain audio data`);
  const bytes = Buffer.from(audioBase64, "base64");
  await writeFile(filePath, bytes);
  metadata[entry.id] = { ...entry, sha256: createHash("sha256").update(bytes).digest("hex") };
  console.log(`generated ${entry.id} (${bytes.length} bytes)`);
}

for (let index = 0; index < entries.length; index += 2) {
  await Promise.all(entries.slice(index, index + 2).map(synthesize));
  await writeFile(metadataPath, JSON.stringify(metadata, null, 2) + "\n");
  await new Promise((resolve) => setTimeout(resolve, 750));
}

const generatedAt = new Date().toISOString().slice(0, 10);
const rows = entries.filter((entry) => metadata[entry.id]).map((entry) => ({
  ...entry,
  source: "tts",
  sourceUrl: "https://mimo.mi.com/docs/usage-guide/speech-synthesis-v2.5",
  author: model,
  modified: generatedAt,
  sha256: metadata[entry.id].sha256
}));
const source = `export interface KoreanAudioEntry {\n  id: string;\n  text: string;\n  file: string;\n  source: "human" | "tts";\n  sourceUrl?: string;\n  author?: string;\n  license?: string;\n  licenseUrl?: string;\n  modified?: string;\n  sha256?: string;\n}\n\nexport const koreanAudioManifest: KoreanAudioEntry[] = ${JSON.stringify(rows, null, 2)};\n\nexport function getAudioEntry(audioId: string): KoreanAudioEntry | undefined {\n  return koreanAudioManifest.find((a) => a.id === audioId);\n}\n\nexport function getAudioEntriesForLesson(lessonId: string): KoreanAudioEntry[] {\n  return koreanAudioManifest.filter((a) => a.id.startsWith(\`${"${lessonId}"}-\`));\n}\n`;
await writeFile(manifestPath, source);
console.log(`wrote ${rows.length} manifest entries`);
