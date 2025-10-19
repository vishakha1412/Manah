import React, { useState, useEffect } from "react";

const affirmations = [
  "You are safe, loved, and enough.",
  "Every breath is a fresh beginning.",
  "Peace begins with your inhale.",
  "Let today be gentle and light.",
  "You are doing your best, and that is brave.",
];

const greetings = {
  morning: "🌞 Good Morning",
  afternoon: "🌤️ Good Afternoon",
  evening: "🌙 Good Evening",
};

export default function MindfulMoment() {
  const [message, setMessage] = useState("");
  const [circleSize, setCircleSize] = useState("grow");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [greeting, setGreeting] = useState("Hello");
  const [audio] = useState(new Audio("/sounds/soft-chimes.mp3")); // Add your audio file in /public

  // Time-based greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting(greetings.morning);
    else if (hour < 18) setGreeting(greetings.afternoon);
    else setGreeting(greetings.evening);
  }, []);

  // Breathing animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCircleSize((prev) => (prev === "grow" ? "shrink" : "grow"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle audio toggle
  const toggleAudio = () => {
    if (isAudioPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.loop = true;
      audio.play();
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  // Show affirmation
  const handleAffirmation = () => {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    setMessage(random);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-violet-100 to-rose-100 flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-2 animate-fade-in">
          {greeting}, Vishakha ✨
        </h2>
        <p className="text-gray-700 mb-6">Let’s take a calming breath together.</p>

        {/* Breathing Circle */}
        <div className="my-10 flex justify-center">
          <div
            className={`rounded-full bg-indigo-200 transition-all duration-[4000ms] ${
              circleSize === "grow" ? "w-40 h-40" : "w-24 h-24"
            }`}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mb-4">Follow the circle—inhale and exhale with ease</p>

        {/* Affirmation */}
        {message && (
          <p className="text-lg text-indigo-800 font-semibold mb-4 animate-fade-in">
            “{message}”
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleAffirmation}
            className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform"
          >
            🧠 New Affirmation
          </button>
          <button
            onClick={toggleAudio}
            className="bg-white text-indigo-700 border border-indigo-300 px-5 py-2 rounded-full font-medium shadow-sm hover:bg-indigo-50 transition"
          >
            {isAudioPlaying ? "🔇 Stop Sound" : "🎵 Play Calm Sound"}
          </button>
        </div>
      </div>
    </section>
  );
}
