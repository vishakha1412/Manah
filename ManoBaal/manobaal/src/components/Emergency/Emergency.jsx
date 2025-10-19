 import React, { useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function Emergency() {
  const [alertSent, setAlertSent] = useState(false);

  const handleAlert = () => {
    setAlertSent(true);
    setTimeout(() => setAlertSent(false), 3000); // Reset after 3s
    // Placeholder: integrate with backend or alert API
    console.log("🚨 Emergency alert sent!");
  };

  const contacts = [
    {
      id: 1,
      name: "Emergency Services",
      number: "112",
    },
    {
      id: 2,
      name: " Papa",
      number: "+91 9999931060",
    },
    {
      id: 3,
      name:  "Mummy",
      number: "+91 9899931060",
    },
    {
      id:4,
      name:"Bhaiya",
      number:"+91 "
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 via-rose-100 to-orange-50 py-12 px-4 sm:px-6 lg:px-12 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 sm:p-10 text-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">🚨 Emergency</h2>
        <p className="text-gray-700 mb-8">
          Press the button below to send an emergency alert to your care circle.
        </p>

        <button
          onClick={handleAlert}
          className={`w-48 h-48 rounded-full text-white text-xl font-bold shadow-lg mb-8 transition-transform duration-200 ${
            alertSent
              ? "bg-green-500 hover:bg-green-600 scale-95"
              : "bg-red-600 hover:bg-red-700 scale-100"
          }`}
        >
          {alertSent ? "✔️ Alert Sent" : "🚨 Send Alert"}
        </button>

        <h3 className="text-xl font-semibold text-indigo-800 mb-4">📱 Quick Contacts</h3>
        <div className="space-y-4">
          {contacts.map((person) => (
            <div
              key={person.id}
              className="flex justify-between items-center bg-indigo-50 rounded-lg px-4 py-3 shadow-sm hover:bg-indigo-100"
            >
              <div className="text-left">
                <p className="font-medium text-indigo-800">{person.name}</p>
                <p className="text-sm text-gray-600">{person.number}</p>
              </div>
              <a
                href={`tel:${person.number}`}
                className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
                aria-label={`Call ${person.name}`}
              >
                <PhoneIcon className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
