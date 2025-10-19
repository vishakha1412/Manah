  import { Link } from "react-router";
import Home1 from "../Home1/Home1";
import MindfulMoment from "../MindFulMoment/MindfulMoment";
import { AITalk } from "../AITalk/AITalk";
//import logo from "../assets/manobaal-logo.svg"; // Replace with your actual logo path

export default function Home() {
   
  return (
    <>
    <main className="min-h-screen  w-full bg-gradient-to-br from-sky-100 via-indigo-100 to-rose-100 px-4 sm:px-6 md:px-12 py-12 flex flex-col items-center justify-center relative overflow-hidden">

      {/* Floating background blobs */}
      <div className="absolute w-72 h-72 bg-indigo-200 opacity-20 rounded-full top-[-80px] left-[-80px] blur-2xl animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-pink-300 opacity-20 rounded-full bottom-[-60px] right-[-60px] blur-2xl animate-pulse"></div>

      {/* Logo */}
      

      {/* Heading and tagline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-800 text-center z-10">
        Welcome to <span className="text-fuchsia-600">- Manah </span>
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-2xl z-10">
        A digital companion for nurturing mind, memory, and meaningful connection 💙
      </p>

      {/* Call-to-action buttons */}
      <div className="mt-10 flex flex-wrap gap-4 justify-center z-10">
        <Link
          to="/features"
          className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          🧠 Discover Features
        </Link>
        <Link
          to="/get"
          className="bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-50 font-semibold py-2 px-6 rounded-full shadow transition-transform hover:scale-105"
        >
          🤝 Get in Touch
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-indigo-500 italic text-center z-10">
        Crafted with calm, care & compassion ✨
      
      </footer>
    
 <AITalk/>
    </main>
    <Home1/>
     
    <MindfulMoment/></>
  );
}