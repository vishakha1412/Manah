import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function GetInTouch() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-100 via-violet-100 to-indigo-100 px-6 py-16 sm:px-10 md:px-20 flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
          🤝 Get in Touch with <span className="text-pink-500">Manah</span>
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          We'd love to hear from you—whether it's feedback, a partnership idea, or a warm hello!
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-indigo-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-indigo-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-indigo-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-indigo-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            📩 Send Message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="mt-10 border-t pt-6 grid sm:grid-cols-3 gap-6 text-center text-indigo-700 text-sm">
          <div className="flex flex-col items-center">
            <PhoneIcon className="w-6 h-6 mb-2 text-pink-400" />
            <p>+91 98765 43210</p>
          </div>
          <div className="flex flex-col items-center">
            <EnvelopeIcon className="w-6 h-6 mb-2 text-pink-400" />
            <p>support@manobaal.org</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPinIcon className="w-6 h-6 mb-2 text-pink-400" />
            <p>Ghaziabad, Uttar Pradesh</p>
          </div>
        </div>
      </div>
    </section>
  );
}
