import { Link } from "react-router-dom";
import "../styles/Nav.scss";

export const Nav = () => {
  return (
    <nav className="nav__container">
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
    </nav>
  );
};
