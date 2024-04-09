import React from "react";
import UpcomingSessions from "./UpcomingSessions";
import PastSessions from "./PastSessions";
function Overview() {
  return (
    <div className="flex flex-col w-full mx-24">
        <h1 className="text-3xl font-bold">Overview</h1>
      <div className="flex flex-row  mt-24 justify-around w-full">
        <UpcomingSessions />
        <PastSessions />
      </div>
    </div>
  );
}

export default Overview;
