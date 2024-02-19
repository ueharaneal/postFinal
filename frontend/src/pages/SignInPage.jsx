import { useState } from "react";
import Register from "../components/Register";
import SignIn from "../components/SignIn";
import SupplementalContent from "../components/customUi/SuplementalContent";

function SignInPage() {
  const [isRegisterPage, setIsRegisterPage] = useState(false);

  const handleRegisterChange = ()=>{
    setIsRegisterPage(!isRegisterPage)
  }
  return (<div>
    <section className="grid min-h-screen grid-cols-1 bg-slate-50 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]">
      {isRegisterPage ? <Register /> : <SignIn />}
      <SupplementalContent />
    </section>
    </div>);
}

export default SignInPage;
