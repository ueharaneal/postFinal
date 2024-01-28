import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-base-100 py-5">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl">
          Street Sound Society
        </Link>
      </div>
      <div className="flex-none gap-2">
        {/* <div className="form-control">
          { /* Enter other inputs here <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div> */}
        <Link to="/selectpost">
          <button className="btn btn-primary mx-5">Book an appointment</button>
        </Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] gap-y-4 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/appointments" className="justify-between text-base">
                Appointments
                <span className="badge text-sm">New</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="justify-between text-base ">
                Profile
                <span className="badge"></span>
              </Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

//colorcodes
//dark white #DDE6ED
//bright blue #9DB2BF
//darkblue 27374D
//kindadarkblue 526D82
