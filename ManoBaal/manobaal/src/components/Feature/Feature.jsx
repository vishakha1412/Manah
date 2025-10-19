 import React from "react";
import { CheckCircleIcon, UserGroupIcon, ClockIcon, PhoneIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";

const features = [
  {
    id: 1,
    title: "Smart Medication Reminders",
    description: "Never miss a dose with friendly alerts and visual check-ins.",
    icon: ClockIcon,
    color: "from-indigo-400 to-indigo-600",
  },
  {
    id: 2,
    title: "Care Team Access",
    description: "Contact doctors and caregivers instantly from your home screen.",
    icon: UserGroupIcon,
    color: "from-pink-400 to-pink-600",
  },
  {
    id: 3,
    title: "Emergency SOS",
    description: "Trigger emergency alerts and auto-calls to trusted contacts.",
    icon: PhoneIcon,
    color: "from-red-400 to-red-600",
  },
  {
    id: 4,
    title: "Personalized Schedule",
    description: "Stay on track with a daily planner designed for comfort and ease.",
    icon: CheckCircleIcon,
    color: "from-green-400 to-green-600",
  },
  {
    id: 5,
    title: "Cognitive Wellness Tools",
    description: "Access brain games, breathing exercises, and emotional tracking.",
    icon: PuzzlePieceIcon,
    color: "from-yellow-400 to-yellow-600",
  },
  {
     id: 5,
    title: "Cognitive Wellness Tools",
    description: "Access brain games, breathing exercises, and emotional tracking.",
    icon: PuzzlePieceIcon,
    color: "from-yellow-400 to-yellow-600",
  }
];

function Feature() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-violet-50 via-indigo-100 to-pink-50 px-6 py-16 sm:px-10 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-800 mb-6 animate-fade-in">
          🌟 What Makes <span className="text-fuchsia-600">manah</span> Special?
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in delay-100">
          Each feature is designed with empathy, simplicity, and accessibility in mind—ensuring seamless support for your comfort  and peaceful mind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`bg-white rounded-2xl p-6 shadow-xl transform transition duration-300 hover:scale-105 animate-slide-up delay-${index * 100}`}
            >
              <div
                className={`w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Feature

