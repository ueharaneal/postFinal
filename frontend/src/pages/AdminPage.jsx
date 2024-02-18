import { useEffect, useState } from "react";
import axios from "axios";
import AdminUsers from "../components/adminComponents/AdminUsers";
import AdminPostData from "../components/adminComponents/AdminPostData";
function AdminPage() {
  return (
    <div className="flex flex-col w-full my-5 justify-around items-center gap-y-4 bg-background">
      <h1 className="font-bold ">Admin Page</h1>
      <div className="flex flex-row w-full justify-around">
        <AdminUsers />
        <AdminPostData />
      </div>
    </div>
  );
}

export default AdminPage;
