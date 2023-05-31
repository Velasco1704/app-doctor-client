import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "../interface/signIn.interface";
import { useLoginMutation } from "../api/apiSlice";
import { useDispatch } from "react-redux";
import { setLocalStorage } from "../features/userSlice.ts";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { data, isSuccess, isError }] = useLoginMutation();
  const [singInState, setSignInState] = useState<SignInForm>({
    email: null,
    password: null,
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(singInState);
  };

  useEffect(() => {
    if (isSuccess && !isError) {
      dispatch(setLocalStorage(data));
      navigate("/");
    }
  }, [data, isSuccess, isError, navigate, dispatch]);

  return (
    <div>
      <h1>Sign In </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={({ target }) =>
            setSignInState({ ...singInState, email: target.value })
          }
          placeholder="Email"
          type="text"
        />
        <input
          onChange={({ target }) =>
            setSignInState({ ...singInState, password: target.value })
          }
          placeholder="Password"
          type="password"
        />
        <button type="submit">Login</button>
        {isError && <p>error</p>}
      </form>
    </div>
  );
};
