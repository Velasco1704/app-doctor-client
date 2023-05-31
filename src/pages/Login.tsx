import { useState } from "react";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";

export const Login = () => {
  const [signInOrSignUp, setSignInOrSignUp] = useState(false);
  return (
    <div>
      <button onClick={() => setSignInOrSignUp(!signInOrSignUp)} type="button">
        {signInOrSignUp ? "Sing Up" : "Sing In"}
      </button>
      {signInOrSignUp ? <SignUp /> : <SignIn />}
    </div>
  );
};
