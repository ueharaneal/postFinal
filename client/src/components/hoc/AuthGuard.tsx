import { useSelector } from "react-redux"
import { useLocation, Navigate } from "react-router-dom";
import { RootState } from "@/store";

interface AuthGuardProps{
  children:React.ReactNode;
}

const AuthGuard = (props: AuthGuardProps) => {
    const users = useSelector((state:RootState)=>state.users);
    let location = useLocation();

    if(!users.auth){
        return <Navigate to="/auth" state={{from:location}} replace/>
    }       

    return <>{props.children}</>;
}

export default AuthGuard;