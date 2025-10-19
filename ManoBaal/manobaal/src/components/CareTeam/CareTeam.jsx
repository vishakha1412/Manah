  import React, { useState } from "react";
import { PhoneIcon, VideoCameraIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const initialTeam = [
  {
    id: 1,
    name: "Dr. Neha Sharma",
    role: "Geriatric Specialist",
    status: "Available",
    avatar: "/avatars/doctor1.png",
  },
  {
    id: 2,
    name: "Raj Malhotra",
    role: "Primary Caregiver",
    status: "Away",
    avatar: "/avatars/caregiver1.png",
  },
  {
    id: 3,
    name: "Priya Verma",
    role: "Nurse",
    status: "Available",
    avatar: "/avatars/nurse1.png",
  },
];

export default function CareTeam() {
  const [team, setTeam] = useState(initialTeam);

  return (
    <section className="min-h-screen bg-gradient-to-bl from-blue-50 via-indigo-100 to-violet-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-4">👩‍⚕️ Your Care Team</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Here’s your support circle. Tap a team member to call, video chat, or message them instantly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full shadow mb-4"
              />
              <h3 className="text-xl font-semibold text-indigo-700">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{member.role}</p>
              <span
                className={`text-xs px-3 py-1 rounded-full mb-4 ${
                  member.status === "Available"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {member.status}
              </span>

              {/* Contact Icons */}
              <div className="flex gap-4">
                <button className="p-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full">
                  <PhoneIcon className="w-5 h-5" />
                </button>
                <button className="p-2 bg-violet-500 hover:bg-violet-600 text-white rounded-full">
                  <VideoCameraIcon className="w-5 h-5" />
                </button>
                <button className="p-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full">
                  <EnvelopeIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
