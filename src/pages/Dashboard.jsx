import Sidebar from "../components/Sidebar";
import OverviewStats from "../components/OverviewStats";
import SummaryCards from "../components/SummaryCards";
import DoctorInfo from "../components/DoctorInfo";
import CalendarMeetings from "../components/CalendarMeetings";

function Dashboard() {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-6">

        <OverviewStats />

        <SummaryCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

          <div className="lg:col-span-2">
            <DoctorInfo />
          </div>

          <CalendarMeetings />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;