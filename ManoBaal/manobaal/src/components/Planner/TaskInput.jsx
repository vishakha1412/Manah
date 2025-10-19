import { useState } from 'react';

export default function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Enter your task..."
      />
      <button onClick={handleAdd} className="bg-purple-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  );
}

