import { useState } from 'react';
import { moodColors } from '../moodThemes/moodThemes';

const moods = [
  { label: 'Joyful', emoji: '😊' },
  { label: 'Anxious', emoji: '😟' },
  { label: 'Grateful', emoji: '🙏' },
  { label: 'Tired', emoji: '😴' },
  { label: 'Peaceful', emoji: '🧘‍♀️' },
  { label: 'Lonely', emoji: '😔' }
];

export default function MoodBoard() {
  const [entries, setEntries] = useState([]);

  const handleSelect = (mood) => {
    const entry = {
      ...mood,
      timestamp: new Date().toLocaleString()
    };
    setEntries([entry, ...entries]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-sky-700">🖼️ How are you feeling?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => handleSelect(m)}
            className={`rounded-lg p-4 text-center text-white font-semibold transition-transform hover:scale-105 ${moodColors[m.label]}`}
          >
            <span className="text-2xl">{m.emoji}</span>
            <div>{m.label}</div>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-600">🧾 Recent Entries</h3>
        <ul className="space-y-2">
          {entries.map((e, i) => (
            <li key={i} className="border-l-4 pl-3 border-blue-300 bg-blue-50 rounded p-2">
              {e.timestamp} — <strong>{e.emoji} {e.label}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
