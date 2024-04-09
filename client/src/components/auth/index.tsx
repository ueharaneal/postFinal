//improved flow 
import PreventSignIn from "../hoc/PreventSignIn.tsx";
import { useState } from "react";
import Login from "./Login.tsx";
import Register from "./Register.tsx";
import { useSelector} from "react-redux";
import { RootState} from "@/store";

function index() {
    const users = useSelector((state: RootState) => state.users);
    const [isRegistered, setIsRegistered] = useState<boolean>(false)

    const handleRegisterChange = () =>{
        setIsRegistered(!isRegistered)
    }
  return (
    <PreventSignIn users={users}>
      {isRegistered ? 
        <Register onIsRegisterChange={handleRegisterChange}/> : <Login onIsRegisterChange={handleRegisterChange}/>
      }
    </PreventSignIn>
  )
}

export default index
