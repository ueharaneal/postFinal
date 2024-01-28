import React from "react";

import ProfileEdit from "../components/ProfileEdit";

function ProfilePage() {
  return (
    <div>
      <div className="flex flex-row ">
        <div className="w-[50%] flex justify-center">
            <h1>Upcoming Shows/Appoinment Times </h1>
        </div>
        <ProfileEdit className="w-[50%]" />
      </div>
    </div>
  );
}

export default ProfilePage;
