import React, { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";

import { toggleTaskDone } from "../../App/scheduleSlice.js";
import { useNavigate } from "react-router";

const scheduleData = [
  { id: 1, time: "8:00 AM", task: "Morning Medication", done: false },
  { id: 2, time: "9:30 AM", task: "Walk in the Garden", done: false },
  { id: 3, time: "11:00 AM", task: "Doctor Video Call", done: false },
  { id: 4, time: "1:00 PM", task: "Lunch", done: false },
  { id: 5, time: "2:00 PM", task: "Memory Game", done: false },
  { id: 6, time: "3:30 PM", task: "Nap Time", done: false },
  { id: 7, time: "5:00 PM", task: "Family Call", done: false },
  { id: 8, time: "6:30 PM", task: "Evening Medication", done: false },
  { id: 9, time: "8:00 PM", task: "Watch TV / Relax", done: false },
  { id: 10, time: "9:30 PM", task: "Bedtime", done: false },
];

export default function Schedule() {
   const tasks=useSelector((state) => state.schedule.tasks);
   const dispatch = useDispatch();
   const navigate= useNavigate();
  const handleToggle = (index) => {
    dispatch(toggleTaskDone(index));
    console.log(`Task ${index} toggled`);
  }

   

  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-100 to-pink-50 px-4 sm:px-6 md:px-12 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">🗓️ Daily Schedule</h2>
        <p className="text-center text-gray-600 mb-8">
          Stay gently organized with your day—from morning sunshine to peaceful rest 🌤️
        </p>

        <div className="overflow-y-auto max-h-[70vh] pr-2">
          <ul className="space-y-4">
            {tasks.map(( task ,index) => (
              <div key={index}> 
              <li
                key={index}
                className={`flex justify-between items-center p-4 rounded-xl shadow transition ${
                  task.done ? "bg-green-100 text-green-800" : "bg-indigo-50 text-indigo-800"
                }`}
              >
                <div>
                  <p className="font-semibold text-lg">{task.title}</p>
                  <span className="text-sm opacity-75">⏰ {task.time}</span>
                </div>
                <button
                  onClick={handleToggle}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    task.done
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {task.done ? "Done ✔️" : "Mark Done"}
                </button>
              </li>
              </div>
            ))}
          </ul>
        </div>
        <button className='bg-amber-200 p-2 rounded-full mt-2 
hover:bg-amber-300 transition-all text-gray-700 font-semibold 
        ' onClick={() => navigate('/add')}>Add More Tasks +</button>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Remember to take breaks and enjoy your day! 🌼
          </p>
      </div>
      </div>
    </section>
  );
}

