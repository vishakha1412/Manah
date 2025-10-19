  import React, { useState } from "react";

export default function Meds() {
  const [meds, setMeds] = useState([
    { id: 1, name: "Aspirin", time: "9:00 AM", taken: false },
    { id: 2, name: "Metformin", time: "1:00 PM", taken: false },
    { id: 3, name: "Vitamin D", time: "7:00 PM", taken: false },
  ]); // we can take api call or data from store to change this

  const toggleTaken = (id) => {
    setMeds((prev) =>
      prev.map((med) =>
        med.id === id ? { ...med, taken: !med.taken } : med
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 animate-fade-in">
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 text-center">
          💊 Your Medications
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Tap to mark as taken. Stay on track, stay well!
        </p>

        <ul className="space-y-4">
          {meds.map((med) => (
            <li
              key={med.id}
              className={`flex items-center justify-between p-4 rounded-xl transition duration-300 shadow ${
                med.taken
                  ? "bg-green-100 text-green-800"
                  : "bg-indigo-50 text-indigo-800"
              }`}
            >
              <div>
                <h3 className="text-lg font-medium">{med.name}</h3>
                <p className="text-sm opacity-80">⏰ {med.time}</p>
              </div>
              <button
                onClick={() => toggleTaken(med.id)}
                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                  med.taken
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {med.taken ? "Taken" : "Mark Taken"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
