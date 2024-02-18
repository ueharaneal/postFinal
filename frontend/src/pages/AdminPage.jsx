import axios from "axios";
import AdminUsers from "../components/adminComponents/AdminUsers";
import AdminPostData from "../components/adminComponents/AdminPostData";
function AdminPage() {
  return (
    <div className="flex flex-col w-full my-5 justify-around items-center gap-y-4 bg-background">
      <h1 className="font-bold text-4xl my-8">Admin Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-3/4 mx-auto items-stretch">
        <AdminUsers />
        <div className="hidden md:block w-px bg-indigo-600 mx-auto h-screen" />{" "}
        {/* Show line only on md screens and up */}
        <AdminPostData />
      </div>
    </div>
  );
}

export default AdminPage;
