import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useGetDoctorQuery } from "../api/apiSlice";
import "../styles/Nav.scss";

export const Nav = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { data } = useGetDoctorQuery(user?.data.id || 0);
  return (
    <nav className="nav__container">
      <h1 className="nav__h1">
        <span className="nav__span">Welcome</span> {data?.name}
      </h1>
      <ul className="nav__ul">
        <li className="nav__li">
          <Link className="nav__link" to="/">
            HOME
          </Link>
        </li>
        <li className="nav__li">
          <Link className="nav__link" to="/dashboard">
            DASHBOARD
          </Link>
        </li>
        <li className="nav__li">
          <Link className="nav__link" to="/profile">
            PROFILE
          </Link>
        </li>
      </ul>
    </nav>
  );
};
