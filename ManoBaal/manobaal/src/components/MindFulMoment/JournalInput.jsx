import { useState } from 'react';

export default function JournalInput({ analyzeMood }) {
  const [entry, setEntry] = useState('');

  const handleAnalyze = async () => {
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: entry }),
    });

    const data = await res.json();
    console.log('Mood analysis result:', data);
    analyzeMood(data.mood);
    setEntry('');
  };
   return (
    <div className="mb-6">
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        className="w-full p-2 border rounded"
        rows={4}
        placeholder="Write how you're feeling..."
      />
      <button onClick={handleAnalyze} className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">
        Analyze Mood
      </button>
    </div>
  );
}

