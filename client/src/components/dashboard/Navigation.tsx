import React from "react";
import { Link } from "react-router-dom";

import { Home } from "lucide-react";
import { CalendarCheck2 } from "lucide-react";
import { UserCog } from 'lucide-react';
function Navigation() {
  return (
    <div>
      <aside className="w-64 bg-card border-ring border-r-2">
        <div className="h-16 flex items-center justify-center border-b-1">
          <h2 className="text-2xl font-semibold text-foreground">
            Dashboard
          </h2>
        </div>
        <ul>
          <li className="flex items-center hover:bg-muted">
            <Link className="flex items-center p-6 space-x-4" to="/dashboard/overview">
              <Home className="h-5 w-5 text-foreground" />
              <span className="text-sm font-medium">Overview</span>
            </Link>
          </li>
          <li className="flex items-center hover:bg-accent">
            <Link className="flex items-center p-6 space-x-4" to="/dashboard/schedulesession">
              <CalendarCheck2 className="h-5 w-5 text-foreground" />
              <span className="text-sm font-medium">Schedule Sessions</span>
            </Link>
          </li>
          <li className="flex items-center hover:bg-accent">
            <Link className="flex items-center  p-6 space-x-4" to="/dashboard/profile">
              <UserCog className="h-5 w-5 text-foreground" />
              <span className="text-sm font-medium">Profile</span>
            </Link>
          </li>
        </ul>
      </aside>

    </div>
  );
}

export default Navigation;
