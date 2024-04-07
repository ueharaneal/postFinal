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
    <div className="fixed-top flex flex-row px-5 m-4 justify-between border-x-4 border-foreground">
      <Link to="/">
        <h1 className="text-primary p-2 rounded-lg text-heavy text-4xl">
          Street
          <span className="text-foreground rounded-lg text-heavy text-4xl">
            Sound
          </span>
          Society
        </h1>
      </Link>
      {users.auth ? (
        <AuthenticatedMenu users={users} />
      ) : (
        <UnauthenticatedMenu  users={users}/>
      )}
    </div>
  );
};

export default Header;
