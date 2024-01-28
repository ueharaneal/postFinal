import React from "react";

function ProfileEdit() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      <h1>{`Hello name`}</h1>
      <div className="avatar">
        <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">What is your name?</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">What is your name?</span>
        </div>

        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered  input-accent w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Write your story</span>
        </div>
        <textarea
          className="textarea textarea-lg textarea-accent text-sm"
          placeholder="Bio"
        ></textarea>
      </label>
    </div>
  );
}

export default ProfileEdit;
