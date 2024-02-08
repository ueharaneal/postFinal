import React from "react";
import SelectPostSelection from "@/components/SelectPostSelection";
function FindPostPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col font-bold text-3xl gap-y-6">
        <h1 className="text-primary ">Select a Post</h1>
        <SelectPostSelection />
      </div>
    </div>
  );
}

export default FindPostPage;
