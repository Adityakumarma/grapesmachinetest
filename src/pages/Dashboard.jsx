import { useState } from "react";
import Sidebar from "../components/Sidebar";
import OverviewStats from "../components/OverviewStats";
import SummaryCards from "../components/SummaryCards";
import DoctorInfo from "../components/DoctorInfo";
import CalendarMeetings from "../components/CalendarMeetings";
import {  FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");
        navigate("/");
    };

    return (

        <div className="flex min-h-screen bg-gray-100">


            <Sidebar />

            <div className="flex-1">


                <div className="md:hidden flex items-center justify-between bg-white p-4 shadow">
                    <h1 className="font-bold text-lg text-purple-600">Grapes HMS</h1>

                    <FaSignOutAlt className="text-red-600" onClick={handleLogout}

                    />
                </div>

                <div className="p-4 md:p-6">

                    <OverviewStats />

                    <div className="mt-6">
                        <SummaryCards />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                        <div className="lg:col-span-2">
                            <DoctorInfo />
                        </div>

                        <CalendarMeetings />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;