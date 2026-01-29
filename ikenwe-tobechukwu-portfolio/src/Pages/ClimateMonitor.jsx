import { Link } from "react-router-dom";

export default function ClimateMonitor() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Back Link */}
        <Link 
          to="/" 
          className="text-blue-600 hover:text-blue-800 font-medium flex items-center mb-10 transition"
        >
          ← Back to Portfolio
        </Link>

        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Climate Monitor (Bare Metal)
          </h1>
          <p className="text-xl text-gray-600">
            A high-precision temperature and humidity tracking system built without high-level libraries.
          </p>
        </header>

        {/* Project Layout Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
            <p>
              This project involved programming an **Arduino Uno R3** using C++ and direct register manipulation. 
              By avoiding standard heavy libraries, I optimized the memory footprint and increased sensor polling efficiency.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800">The Hardware</h2>
            <p>
              The system utilizes a **DHT22 sensor** for digital signal output. I implemented the 
              one-wire communication protocol from scratch to read the 40-bit data stream.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="font-bold mb-2">Key Achievement:</h3>
              <p>Reduced power consumption by 15% through custom sleep-cycle interrupts.</p>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="bg-gray-50 p-6 rounded-2xl h-fit border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">
              Tech Stack
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> C/C++ (Bare Metal)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> AVR Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> DHT22 Sensor
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Arduino IDE
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}