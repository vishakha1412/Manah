import React from "react";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
 

export default function Home1() {
  const {token}=useContext(AuthContext);
  if(!token){
    window.location.href="/login";}
 

  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-indigo-50 via-violet-500 to-rose-50 px-6 sm:px-10 md:px-20 py-16 flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden ">
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-800 leading-snug">
          Welcome to <span className="text-fuchsia-600">- Manah </span>
        </h1>
        <p className="text-gray-700 text-base sm:text-lg max-w-md">
          A compassionate digital companion focused on care, connection, and cognitive support—designed with empathy for every generation.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link
            to="/schedule"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow transition-all"
          >
            🗓️ View Schedule
          </Link>
          <Link
            to="/care"
            className="bg-white hover:bg-indigo-100 text-indigo-700 border border-indigo-300 px-6 py-2 rounded-full shadow transition-all"
          >
            👨‍⚕️ Meet Care Team
          </Link>
        </div>
      </div>

     
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center animate-slide-in">
        <img
          src='#'
          alt="Illustration showing care and support"
          className="w-3/4 max-w-sm drop-shadow-xl"
        />
      </div>
    </section>
  );
}
