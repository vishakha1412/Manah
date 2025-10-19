export default function TaskList({ tasks }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li key={index} className="bg-gray-100 p-2 rounded shadow">
          {task}
        </li>
      ))}
    </ul>
  );
}

