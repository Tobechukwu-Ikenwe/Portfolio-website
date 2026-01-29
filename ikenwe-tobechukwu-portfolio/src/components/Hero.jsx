// components/Hero.jsx
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 
export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white text-center px-4">
       {/* Logo links back to Home */}
        <Link to="/" className="flex items-center space-x-6">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 shadow-sm" 
          />
          
        </Link>
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Tobe</h1>
      <p className="text-lg md:text-2xl mb-6">Engineering projects that push the limits of tech</p>
      <a
        href="#projects"
        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        Explore My Work
      </a>
    </section>
  );
}
