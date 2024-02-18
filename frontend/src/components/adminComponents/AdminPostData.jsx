import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminPostData() {
  const [selectedPost, setSelectedPost] = useState({});
  const [postData, setPostData] = useState([]); //the data for the selected user

  //api call to get all of the user's names
  useEffect(() => {
    const response = axios
      .get("api/postdata/selectpost")
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error("there was an error", error);
      });
  }, []);

  const handleSelectionChange = (event) => {
    const postObject = postData.find((post) => post._id === event.target.value);
    setSelectedPost(postObject);
  };
  return (
    <div className="flex flex-col gap-y-3 p-4">
      <h1 className="font-bold mb-5">Post Data</h1>
      <div className="flex flex-col gap-y-3 mr-3 p-4">
        <h2>Select a Post</h2>
        <select
          name="postName"
          id="postName"
          onChange={handleSelectionChange}
          value={selectedPost ? selectedPost._id : ""}
          className="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-4 border-gray-300  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-indigo-600"
        >
          <option value="">Select a Post</option>
          {postData.map(({ _id, postName }) => {
            return (
              <option key={_id} value={_id}>
                {postName}
              </option>
            );
          })}
        </select>
        {selectedPost._id && (
          <div className="flex flex-col gap-y-5">
            <div>
              <h2>Post ID</h2>
              <div>{selectedPost._id} </div>
            </div>
            <div>
              <h2>Location</h2>
              <div>{selectedPost.postName}</div>
            </div>
            <div>
              <h2>Volume Codes</h2>
              <div></div>
            </div>
            <div>
              <h2>Duration Codes</h2>
              <div></div>
            </div>
            <div>
              <h2>Admin Code</h2>
              <div>{selectedPost.adminCode}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPostData;
