import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "../interface/signUp.interface";
import { useRegisterMutation } from "../api/apiSlice";
import { useDispatch } from "react-redux";
import { setLocalStorage } from "../features/userSlice.ts";

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { data, isSuccess, isError }] = useRegisterMutation();
  const [signUpState, setSignUpState] = useState<SignUpForm>({
    name: null,
    fullName: null,
    age: null,
    email: null,
    password: null,
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(signUpState);
  };

  useEffect(() => {
    if (isSuccess && !isError) {
      dispatch(setLocalStorage(data));
      navigate("/");
    }
  }, [data, isSuccess, isError, navigate, dispatch]);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={({ target }) =>
            setSignUpState({ ...signUpState, name: target.value })
          }
          type="text"
          placeholder="Name"
        />
        <input
          onChange={({ target }) =>
            setSignUpState({ ...signUpState, fullName: target.value })
          }
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={({ target }) =>
            setSignUpState({ ...signUpState, age: +target.value })
          }
          type="number"
          placeholder="Age"
        />
        <input
          onChange={({ target }) =>
            setSignUpState({ ...signUpState, email: target.value })
          }
          type="text"
          placeholder="Email"
        />
        <input
          onChange={({ target }) =>
            setSignUpState({ ...signUpState, password: target.value })
          }
          type="password"
          placeholder="Password"
        />
        <button type="submit">sign up</button>
        {isError && <p>error</p>}
      </form>
    </div>
  );
};
