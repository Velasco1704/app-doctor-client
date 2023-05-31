import { Nav } from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearLocalStorage } from "../features/userSlice.ts";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(clearLocalStorage());
    navigate("/login");
  };
  return (
    <>
      <Nav />
      <h1>Home</h1>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
};
