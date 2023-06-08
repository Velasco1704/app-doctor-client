import { useState } from "react";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";
import "../styles/Login.scss";

export const Login = () => {
  const [signInOrSignUp, setSignInOrSignUp] = useState(false);
  return (
    <div className="login__layout">
      <div className="login__container">
        <div className="login__container__button">
          <button
            className="login__button"
            onClick={() => setSignInOrSignUp(!signInOrSignUp)}
            type="button"
          >
            <div>{signInOrSignUp ? "Sing In" : "Sing Up"}</div>
          </button>
        </div>
        {signInOrSignUp ? <SignUp /> : <SignIn />}
      </div>
    </div>
  );
};
