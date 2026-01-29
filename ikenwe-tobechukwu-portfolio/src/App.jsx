import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import SpeechToText from "./Pages/SpeechToText";
import ClimateMonitor from "./Pages/ClimateMonitor";
import ProjectsPage from "./Pages/ProjectsPage"; 
import ContactPage from "./Pages/ContactPage";  

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/speech-to-text" element={<SpeechToText />} />
          <Route path="/climate-monitor" element={<ClimateMonitor />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}