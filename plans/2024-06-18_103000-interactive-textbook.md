# Interactive English Textbook (Next.js) Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Create a Next.js website to host the "English for Beginners" textbook with interactive phonics and grammar content.

**Architecture:** A simple Next.js App Router project with static content generation and client-side React components for interactivity.

**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS

---

### Task 1: Initialize Next.js Project

**Objective:** Create a new Next.js application in the current directory.

**Files:**
- Create: `package.json`, `next.config.mjs`, `app/layout.tsx`, `app/page.tsx`

**Step 1: Create the project**

Run: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm`

**Step 2: Verify installation**

Run: `npm run dev`
Expected: Server starts on localhost:3000

**Step 3: Commit**

```bash
git add .
git commit -m "chore: initialize next.js project"
```

---

### Task 2: Create Homepage (Index)

**Objective:** Create a welcoming homepage that links to the textbook sections.

**Files:**
- Modify: `app/page.tsx`

**Step 1: Implement Homepage UI**

```tsx
// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">BioLingo Textbook</h1>
      <p className="text-xl mb-12">Your interactive guide to English.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/phonics" className="p-6 border rounded-lg hover:bg-gray-100 transition-colors">
          <h2 className="text-2xl font-semibold">Phonics (自然拼读)</h2>
          <p className="mt-2">Learn to read English sounds.</p>
        </Link>
        
        <Link href="/grammar" className="p-6 border rounded-lg hover:bg-gray-100 transition-colors">
          <h2 className="text-2xl font-semibold">Grammar (基础语法)</h2>
          <p className="mt-2">Build simple sentences.</p>
        </Link>
      </div>
    </main>
  );
}
```

**Step 2: Verify UI**

Run: `npm run dev`
Expected: Homepage displays with two clickable cards.

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add homepage with navigation"
```

---

### Task 3: Implement Phonics Section

**Objective:** Create the phonics learning page with interactive sound playback (using browser's Web Speech API for now).

**Files:**
- Create: `app/phonics/page.tsx`

**Step 1: Create Phonics Page**

```tsx
// app/phonics/page.tsx
"use client";

import { useState } from 'react';

const phonicsData = [
  { letter: 'A', sound: '/æ/', example: 'Apple' },
  { letter: 'B', sound: '/b/', example: 'Boy' },
  { letter: 'C', sound: '/k/', example: 'Cat' },
];

export default function PhonicsPage() {
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Phonics: The Alphabet Sounds</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {phonicsData.map((p) => (
          <div 
            key={p.letter} 
            className="p-4 border rounded-lg cursor-pointer hover:bg-blue-50"
            onClick={() => speak(p.example)}
          >
            <div className="text-4xl font-bold text-blue-600">{p.letter}</div>
            <div className="text-gray-600 mt-2">Sound: {p.sound}</div>
            <div className="text-sm mt-1">Example: {p.example}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
```

**Step 2: Verify Speech**

Run: `npm run dev` -> Click on "A"
Expected: Browser speaks "Apple" (or your system's default voice).

**Step 3: Commit**

```bash
git add app/phonics/page.tsx
git commit -m "feat: add interactive phonics page"
```

---

### Task 4: Implement Grammar Section with Quiz

**Objective:** Create a grammar page with a simple "Subject-Verb Agreement" quiz.

**Files:**
- Create: `app/grammar/page.tsx`

**Step 1: Create Grammar Quiz Component**

```tsx
// app/grammar/page.tsx
"use client";

import { useState } from 'react';

export default function GrammarPage() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const questions = [
    { q: "He ___ a car.", options: ["have", "has"], correct: "has" },
    { q: "They ___ happy.", options: ["is", "are"], correct: "are" },
    { q: "She ___ to school.", options: ["go", "goes"], correct: "goes" },
  ];

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold">Quiz Complete!</h1>
        <p className="text-2xl mt-4">Score: {score}/{questions.length}</p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Grammar Quiz</h1>
      <div className="p-6 border rounded-lg shadow-sm">
        <p className="text-xl mb-4">{questions[currentQuestion].q}</p>
        <div className="flex gap-4">
          {questions[currentQuestion].options.map((opt) => (
            <button 
              key={opt}
              onClick={() => handleAnswer(opt)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
```

**Step 2: Verify Quiz Logic**

Run: `npm run dev` -> Answer questions.
Expected: Score updates, "Quiz Complete" screen shows.

**Step 3: Commit**

```bash
git add app/grammar/page.tsx
git commit -m "feat: add grammar quiz section"
```

---

### Task 5: Final Polish

**Objective:** Add a "Back to Home" button to sub-pages.

**Files:**
- Modify: `app/phonics/page.tsx`, `app/grammar/page.tsx`

**Step 1: Add Back Button**

Add `<Link href="/" className="...">Back to Home</Link>` at the top of both pages.

**Step 2: Commit**

```bash
git add .
git commit -m "feat: add navigation back to home"
```