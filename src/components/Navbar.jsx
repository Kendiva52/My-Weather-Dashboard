import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-gray-200 font-bold text-xl"> 🌦️ Weather Dashboard</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-400">Home</a>
          <a href="#" className="text-white hover:text-gray-400">About</a>
          <a href="#" className="text-white hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
        >
          <span
            className={`h-1 bg-white rounded transition-all duration-300  ${
              isOpen ? "rotate-45 translate-y-2 " : ""
            }`}
          ></span>
          <span
            className={`h-1 bg-white rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-1 bg-white rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-10 py-2 space-y-2 text-right">
          <a href="#" className="block text-ash hover:text-gray-500">Home</a>
          <a href="#" className="block text-ash hover:text-gray-500">About</a>
          <a href="#" className="block text-ash hover:text-gray-500">Contact</a>
        </div>
      )}
    </nav>
  );
}
