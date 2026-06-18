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
          <h2 className="text-2xl font-semibold">Grammar (中级语法)</h2>
          <p className="mt-2">Master intermediate English grammar.</p>
        </Link>
      </div>
    </main>
  );
}
