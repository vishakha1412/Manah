 import MoodSelector from '../moodThemes/MoodSelector';
 import JournalInput from '../MindFulMoment/JournalInput';
 import VoiceInput from '../ADD/VoiceInput';
import { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';





const moodThemes = {
  Calm: 'bg-blue-50',
  Stressed: 'bg-red-50',
  Energetic: 'bg-green-50',
};

export default function Planner() {
  const [tasks, setTasks] = useState([]);
  const [mood, setMood] = useState('Calm');

  return (
    <div className={`p-4 rounded shadow-md ${moodThemes[mood]}`}>
      <MoodSelector setMood={setMood} />
      <JournalInput analyzeMood={setMood} />

      <TaskInput addTask={(task) => setTasks([...tasks, task])} />
      <TaskList tasks={tasks} />
      <VoiceInput onText={(text) => console.log('Voice input:', text)} />

    </div>
  );
}

