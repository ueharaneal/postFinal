import React from "react";
import { Link } from "react-router-dom";

import { Home } from "lucide-react";
import { CalendarCheck2 } from "lucide-react";
import { UserCog } from 'lucide-react';
function Navigation() {
  return (
    <div>
      <aside className="w-64 bg-card border-border border-r-2 h-screen">
        <div className="h-16 flex items-center justify-center border-border border-b-2">
          <h2 className="text-2xl mb-2 font-semibold  text-foreground">
            Dashboard
          </h2>
        </div>
        <ul>
          <li className="flex items-center hover:bg-muted">
            <Link className="flex items-center p-6 pr-32 space-x-4" to="/dashboard/overview">
              <Home className="h-6 w-6 text-foreground" />
              <span className="text-base font-medium">Overview</span>
            </Link>
          </li>
          <li className="flex items-center hover:bg-accent">
            <Link className="flex items-center p-6  pr-10 space-x-4" to="/dashboard/schedulesession">
              <CalendarCheck2 className="h-6 w-6 text-foreground" />
              <span className="text-base font-medium">Schedule Sessions</span>
            </Link>
          </li>
          <li className="flex items-center hover:bg-accent">
            <Link className="flex items-center  p-6 pr-32 space-x-4" to="/dashboard/profile">
              <UserCog className="h-6 w-6 text-foreground" />
              <span className="text-base font-medium">Profile</span>
            </Link>
          </li>
        </ul>
      </aside>

    </div>
  );
}

export default Navigation;
