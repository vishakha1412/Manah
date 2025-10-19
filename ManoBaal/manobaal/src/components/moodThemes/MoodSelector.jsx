export default function MoodSelector({ setMood }) {
  const moods = ['Calm', 'Stressed', 'Energetic'];
   

  return (
    <div className="flex gap-4 mb-6">
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => setMood(mood)}
          className="px-4 py-2 rounded border hover:bg-gray-200"
        >
          {mood}
        </button>
      ))}
    </div>
  );
}
