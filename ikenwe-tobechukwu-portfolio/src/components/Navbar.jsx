import { Link } from "react-router-dom";
import navbarImage from "../assets/logo.png"; 

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center pt-8 px-4 font-mono">
      {/* The "Island" Container 
        - aspect-video or aspect-[3/1] ensures the image shape is preserved.
        - h-auto allows it to scale naturally.
      */}
      <div className="relative w-full max-w-4xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-3xl overflow-hidden group border-2 border-white/10">
        
        {/* THE IMAGE: Using 'object-cover' ensures it fills the area like a cinematic shot */}
        <img 
          src={navbarImage} 
          alt="Brand Header" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />

        {/* THE GLOSS: A subtle gradient overlay to make the text pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 opacity-80"></div>

        {/* THE CONTENT: Pure, clean, and futuristic */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
          <div className="flex justify-between items-center w-full">
            
            {/* Branding with a "Glow" effect */}
            <Link to="/" className="relative">
              <span className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase italic drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
                TOBECHUKWU IKENWE
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-500 mt-1"></div>
            </Link>

            {/* Navigation: Minimalist Terminal Style */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-[0.3em] text-white/90">
                <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </div>
              
              {/* GitHub 'Action' Button */}
              <a 
                href="https://github.com/tobechukwu-ikenwe" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-black px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-tighter hover:bg-blue-500 hover:text-white transition-all shadow-lg"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}