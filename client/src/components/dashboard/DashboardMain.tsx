
import { Outlet, Routes, Route } from 'react-router-dom';
import useMediaQuery from '@/utils/useMediaQuery';
import ScheduleSession from './ScheduleSession';
import Overview from './Overview';
import Navigation from './Navigation';
import Profile from './Profile';
function Dashboard() {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <div className='z-50'>
      {isSmallScreen ? (
        <div>small Screen nav</div>
      ) : (
        <div className='flex flex-row h-full mt-28 overflow-y-clip'>
          <Navigation/>
          <Outlet />
        </div>
      )}
      <Routes>
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/schedulesession" element={<ScheduleSession />} />
        <Route path="/dashboard/profile" element={<Profile />} />

      </Routes>
    </div>
  );
}

export default Dashboard;