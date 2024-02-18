import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminPostData() {
  const [userNames, setUserNames] = useState([]); // state for all users name
  const [selectedUser, setSelectedUser] = useState("");
  const [userData, setUserData] = useState(null); //the data for the selected user

  //api call to get all of the user's names
  useEffect(() => {
    const response = axios
      .get("api/users/getusersnames")
      .then((response) => {
        setUserNames(response.data);
        console.log(userNames);
      })
      .catch((error) => {
        console.error("there was an error", error);
      });
  }, []);

  // make an api call when the selected user changes
  useEffect(() => {
    const userResponse = axios
      .post("/api/users/getuser", { id: selectedUser })
      .then((userResponse) => setUserData(userResponse.data))
      .catch((error) => {
        console.error("Error fetching user", error);
      });
  }, [selectedUser]);

  const handleSelectionChange = (event) => {
    setSelectedUser(event.target.value);
  };
  return (
    <div className="flex flex-col gap-y-3 p-4">
      <h1 className="font-bold mb-5">Post Data</h1>
      <div className="flex flex-col gap-y-3 mr-3 p-4">
        <h2>Select a Post</h2>
        <select
          name="userNames"
          id="userNames"
          onChange={handleSelectionChange}
          value={selectedUser}
          className="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-4 border-gray-300  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-indigo-600"
        >
          <option value="">Select a User</option>
          {userNames.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.firstName} {user.lastName}
              </option>
            );
          })}
        </select>
        {userData && (
          <div className="flex flex-col gap-y-5">
            <div>
              <h2>Email</h2>
              <div>{userData.email} </div>
            </div>
            <div>
              <h2>Name</h2>
              <div>
                {userData.firstName} {userData.lastName}
              </div>
            </div>
            <div>
              <h2>Password</h2>
              <div>{userData.password}</div>
            </div>
            <div>
              <h2>Role</h2>
              <div>{userData.role}</div>
            </div>
            <div>
              <h2>Date Created</h2>
              <div>{userData.date}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPostData;
