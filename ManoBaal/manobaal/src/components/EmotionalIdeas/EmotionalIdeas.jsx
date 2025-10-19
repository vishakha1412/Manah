import React from "react";
import  { useState } from 'react';


const ideas = [
  {
    title: "Emotion Journal with Sentiment Insights",
    description:
      "Users speak or type reflections, and manoBaal gently summarizes mood trends over time—perfect for caregivers to track emotional well-being with consent.",
  },
  {
    title: "Interactive Story Therapy",
    description:
      "Culturally rooted stories that adjust based on a user's emotional state—like a choose-your-own-comfort tale.",
  },
  {
    title: "Voice-Activated Cognitive Exercises",
    description:
      "Mini mental games delivered via voice for hands-free interaction. Ideal for visually impaired or bedridden users.",
  },
];

export default function EmotionalIdeas() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-zinc-100 min-h-screen px-4 py-16 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-10">
          🧠 Emotional & Cognitive Wellness Ideas
        </h2>

        <div className="space-y-6">
          {ideas.map((idea, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-violet-100 to-white border-l-4 border-indigo-400 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition duration-200"
            >
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                {index + 1}. {idea.title}
              </h3>
              <p className="text-gray-700 text-sm">{idea.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
