import { useState } from "react";
import Register from "../components/Register";
import SignIn from "../components/SignIn";
import SupplementalContent from "../components/customUi/SuplementalContent";

function SignInPage() {
  const [isRegisterPage, setIsRegisterPage] = useState(false);

  const handleRegisterToggle = () => {
    setIsRegisterPage(!isRegisterPage);
  };
  return (
    <div>
      <section className="grid min-h-screen items-start grid-cols-1 bg-slate-50 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]">
        {isRegisterPage ? (
          <Register onRegisterChange={handleRegisterToggle} />
        ) : (
          <SignIn onRegisterChange={handleRegisterToggle} />
        )}
        <SupplementalContent />
      </section>
    </div>
  );
}

export default SignInPage;
