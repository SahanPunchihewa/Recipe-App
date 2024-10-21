import React from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline"; // Import Heroicon for the log-out icon

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b">
      {/* Left side: Logo */}
      <div className="text-3xl font-bold text-pink-500">
      <img
            src="/logo.png" // Replace with your actual logo path
            alt="Logo"
            className="h-12"
          />
      </div>

      {/* Center: Navigation Links */}
      <nav className="space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-gray-700">HOME</a>
        <a href="#" className="font-semibold text-black">FAVOURITE</a>
      </nav>

      {/* Right side: Log-out Icon */}
      <button className="text-gray-600 hover:text-black">
        <ArrowRightOnRectangleIcon className="h-6 w-6" />
      </button>
    </header>
  );
};

export default Header;
