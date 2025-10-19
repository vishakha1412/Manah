import React from "react";
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-indigo-700 text-white px-6 sm:px-10 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
        
        {/* Branding */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2"> - Manah </h2>
          <p className="text-sm text-indigo-200 max-w-sm">
            Empowering cognitive wellness and elder care with empathy and technology.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-6 mt-6 lg:mt-0">
          <div>
            <h3 className="font-semibold mb-2">Explore</h3>
            <ul className="space-y-1 text-sm text-indigo-100">
              <li><Link to="/features" className="hover:text-white">Features</Link></li>
              <li><Link to="/schedule" className="hover:text-white">Schedule</Link></li>
              <li><Link to="/care" className="hover:text-white">Care Team</Link></li>
              <li><Link to="/emergency" className="hover:text-white">Emergency</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-sm text-indigo-100">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Accessibility</a></li>
              <li><a href="#" className="hover:text-white">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Contact / Social */}
        <div className="flex-1 mt-6 lg:mt-0 space-y-2 text-sm text-indigo-100">
          <p className="flex items-center gap-2">
            <PhoneIcon className="w-4 h-4 text-pink-300" />
            +91 XXXXxxxxxx
          </p>
          <p className="flex items-center gap-2">
            <EnvelopeIcon className="w-4 h-4 text-pink-300" />
            help@manobaal.org
          </p>
          <p className="flex items-center gap-2">
            <GlobeAltIcon className="w-4 h-4 text-pink-300" />
            www.manobaal.org
          </p>
        </div>
      </div>

      <div className="text-center text-indigo-300 text-xs mt-10 border-t border-indigo-500 pt-4">
        © {new Date().getFullYear()} - Manah . All rights reserved.
      </div>
    </footer>
  );
}
