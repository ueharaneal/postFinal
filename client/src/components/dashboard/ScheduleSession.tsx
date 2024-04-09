import React from "react";
import SteppedProgress from "./CreateSession/SteppedProgress";
function ScheduleSession() {
  return (
    <div className="w-full h-full">
      Create an appointment
      <div>
        <SteppedProgress />
      </div>
    </div>
  );
}

export default ScheduleSession;
