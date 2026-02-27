import React from "react";
import {
  FaTachometerAlt,
  FaChartBar,
  FaUserMd,
  FaCalendarAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="bg-purple-600 text-white w-64 min-h-screen p-6 hidden md:block">

      {/* Logo */}
      <h1 className="text-2xl font-bold mb-10">
        Grapes HMS
      </h1>

      {/* Navigation */}
      <nav className="space-y-4">

        <div className="flex items-center gap-3 p-3 rounded hover:bg-purple-400 cursor-pointer">
          <FaTachometerAlt />
          <span>Overview</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded hover:bg-purple-400 cursor-pointer">
          <FaChartBar />
          <span>Summary</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded hover:bg-purple-400 cursor-pointer">
          <FaUserMd />
          <span>Doctors</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded hover:bg-purple-400 cursor-pointer">
          <FaCalendarAlt />
          <span>Calendar</span>
        </div>

      </nav>

     
    </div>
  );
}

export default Sidebar;