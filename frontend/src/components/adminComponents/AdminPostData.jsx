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
    setSelectedPost(postObject || {});
  };

  //CONTENT FOR VOL AND DUR CODES
  const volCodeArrayContent =
    selectedPost && selectedPost.volCodeArray
      ? selectedPost.volCodeArray.map((codeArray, index) => {
          const indexNames = ["Zero", "One", "Two", "Three"]; // Adjust this array if you have more indexes
          const volCodeIndexPropName = `volCodeIndex${indexNames[index]}`;

          const currentIteration = selectedPost[volCodeIndexPropName];
          const currentCode = codeArray[currentIteration];
          return (
            <div className="flex flex-col my-2" key={index}>
              <div className="flex flex-col gap-x-2">
                <h3 className="font-bold">Array {index + 1}</h3>
                <h4>
                  Current Iteration:{" "}
                  <span className="font-bold border-black border-b-2">
                    {currentIteration}
                  </span>
                </h4>
                <h4>
                  Current Code:{" "}
                  <span className="font-bold border-black border-b-2">
                    {currentCode}
                  </span>
                </h4>
              </div>
              <div className="flex flex-row">
                {codeArray.map((code, codeIndex) => {
                  return (
                    <div className="my-2" key={codeIndex}>
                      {code},
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      : null;

  //content for the dur codes
  const durCodeArrayContent =
    selectedPost && selectedPost.durCodeArray
      ? selectedPost.durCodeArray.map((codeArray, index) => {
          //we need to create a list of the suffix
          const indexNames = ["Zero", "One", "Two", "Three"];
          const durCodeIndexPropName = `durCodeIndex${indexNames[index]}`;

          const currentIteration = selectedPost[durCodeIndexPropName];

          const currentArrayCode = codeArray[currentIteration];
          return (
            <div key={index} className="flex flex-col my-2">
              <div className="flex flex-col gap-x-2">
                <h3 className="font-bold">Array {index + 1}</h3>
                <h4 className="font-heavy">
                  Current Iteration:{" "}
                  <span className="border-black border-b-2 font-bold">
                    {currentIteration}
                  </span>
                </h4>
                <h4 className="font-heavy">
                  Current Code:{" "}
                  <span className="border-black border-b-2 font-bold">
                    {currentArrayCode}
                  </span>
                </h4>
              </div>
              <div className="flex flex-row">
                {codeArray.map((code, index) => {
                  return (
                    <div className="my-2" key={index}>
                      {code},
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      : null;

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
        {selectedPost?._id && (
          <div className="flex flex-col gap-y-5">
            <div>
              <h2>Post ID</h2>
              <div>{selectedPost.postId ? selectedPost.postId : null} </div>
            </div>
            <div>
              <h2>Location</h2>
              <div>{selectedPost.postName}</div>
            </div>
            <div>
              <h2>Volume Codes</h2>
              {volCodeArrayContent}
            </div>
            <div>
              <h2>Duration Codes</h2>
              {durCodeArrayContent}
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
