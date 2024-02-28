import React from "react";
import SelectPostSelection from "../SelectPostSelection";

function SelectionStepOne() {
  return (
    <div className="flex flex-col gap-y-6 justify-center items-center">
      <h1 className="text-primary ">Select a Post</h1>
      <SelectPostSelection />
      <h2>Select Date</h2>
      <div className="flex flex-row gap-x-6">
        <h2>Select Duration</h2>
        <h2>Select Time</h2>
      </div>
    </div>
  );
}

export default SelectionStepOne;
