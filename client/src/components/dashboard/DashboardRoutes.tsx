import { Routes, Route } from "react-router-dom";
import DashboardMain from "./DashboardMain";
import MakeAppointment from "./ScheduleSession";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardMain />} />
      <Route path="/makeappointment" element={<MakeAppointment />} />
    </Routes>
  );
}

export default DashboardRoutes;
