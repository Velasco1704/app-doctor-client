import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpFormTypes } from "../interface/signUp.interface";
import { useRegisterMutation } from "../api/apiSlice";
import { useDispatch } from "react-redux";
import { setLocalStorage } from "../features/userSlice.ts";
import { ImWarning } from "react-icons/im";
import "../styles/FormLogin.scss";

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { data, isSuccess, isError }] = useRegisterMutation();
  const [signUpState, setSignUpState] = useState<SignUpFormTypes>({
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
    <div className="form__login__container">
      <h1 className="form__login__h1">Sign up</h1>
      <form className="form__login__form" onSubmit={handleSubmit}>
        <input
          required
          autoComplete="off"
          className="form__login__input"
          onChange={({ target }) =>
            setSignUpState({ ...signUpState, name: target.value })
          }
          type="text"
          placeholder="Name"
        />
        <input
          required
          autoComplete="off"
          className="form__login__input"
          onChange={({ target }) =>
            setSignUpState({ ...signUpState, fullName: target.value })
          }
          type="text"
          placeholder="Full Name"
        />
        <input
          required
          autoComplete="off"
          className="form__login__input"
          onChange={({ target }) =>
            setSignUpState({ ...signUpState, age: +target.value })
          }
          type="number"
          placeholder="Age"
        />
        <input
          className="form__login__input"
          onChange={({ target }) =>
            setSignUpState({ ...signUpState, email: target.value })
          }
          type="text"
          placeholder="Email"
        />
        <input
          className="form__login__input"
          onChange={({ target }) =>
            setSignUpState({ ...signUpState, password: target.value })
          }
          type="password"
          placeholder="Password"
        />
        <div className="form__login__form__container__button">
          <button className="form__login__button" type="submit">
            Sign Up
          </button>
        </div>
        {isError && (
          <div className="form__login__error">
            <span className="form__login__error__span">
              <ImWarning />
            </span>
            <p className="form__login__error__p">Something went wrong</p>
          </div>
        )}
      </form>
    </div>
  );
};
