
import { Outlet, Link } from 'react-router-dom'
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Main</Link>
          </li>
          <li>
            <Link to="/schedulesession">Schdule Session</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;