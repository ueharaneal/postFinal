import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthenticatedMenu from "./AuthenticatedMenu";
import UnauthenticatedMenu from "./UnauthenticatedMenu";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

//LOGGED OUT HEADER
const Header = () => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  return (
    <div className="fixed top-0 flex bg flex-row p-5 m-4 justify-between z-50 w-full">
      <Link to="/">
        <div className="hidden md:flex md:text-2xl lg:text-4xl bg-transparent backdrop-blur-sm">
          <h1 className="text-primary p-2 rounded-sm text-heavyborder-accent border-b-2 ">
            Street
            <span className="text-foreground rounded-lg text-heavy">
              Sound
            </span>
            Society
          </h1>
        </div>
      </Link>
      <div className="px-6 py-2 mx-5 flexbg-blur-lg rounded-xl  bg-opacity-50 border-accent border-b bg-transparent backdrop-blur-sm">
        {users.auth ? (
          <AuthenticatedMenu users={users} />
        ) : (
          <UnauthenticatedMenu users={users} />
        )}
      </div>
    </div>
  );
};

export default Header;
