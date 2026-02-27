import React from "react";
import {
  FaTachometerAlt,
  FaChartBar,
  FaUserMd,
  FaCalendarAlt,
  FaSignOutAlt
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const  navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token"); 
    navigate("/");
  };

  return (
    <div className="bg-purple-600 text-white w-64 min-h-screen p-6 hidden md:flex flex-col justify-between">

      <div>
    
        <h1 className="text-2xl font-bold mb-10">
          Grapes HMS
        </h1>

    
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

      
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 p-3 rounded bg-red-500 hover:bg-red-600 w-full"
      >
        <FaSignOutAlt />
        Logout
      </button>

    </div>
  );
}

export default Sidebar;