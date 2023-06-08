import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/apiSlice.ts";
import { useDispatch } from "react-redux";
import { setLocalStorage } from "../features/userSlice.ts";
import { SignInFormTypes } from "../interface/signIn.interface";
import { ImWarning } from "react-icons/im";
import "../styles/FormLogin.scss";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { data, isSuccess, isError }] = useLoginMutation();
  const [singInState, setSignInState] = useState<SignInFormTypes>({
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
    <div className="form__login__container">
      <h1 className="form__login__h1">Sign In </h1>
      <form className="form__login__form" onSubmit={handleSubmit}>
        <input
          className="form__login__input"
          onChange={({ target }) =>
            setSignInState({ ...singInState, email: target.value })
          }
          placeholder="Email"
          type="text"
        />
        <input
          className="form__login__input"
          onChange={({ target }) =>
            setSignInState({ ...singInState, password: target.value })
          }
          placeholder="Password"
          type="password"
        />
        <div className="form__login__form__container__button">
          <button className="form__login__button" type="submit">
            Login
          </button>
        </div>
        {isError && (
          <div className="form__login__error">
            <span className="form__login__error__span">
              <ImWarning />
            </span>
            <p className="form__login__error__p">
              Your password or email is wrong!!
            </p>
          </div>
        )}
      </form>
    </div>
  );
};
