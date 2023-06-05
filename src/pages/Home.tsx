import { Nav } from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearLocalStorage } from "../features/userSlice.ts";
import { ListPatients } from "../components/ListPatients.tsx";
import { useSelector } from "react-redux";
import { useGetDoctorQuery } from "../api/apiSlice.ts";
import { RootState } from "../app/store.ts";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useSelector((state: RootState) => state.userId);
  const { data } = useGetDoctorQuery(userId);

  const handleLogOut = () => {
    dispatch(clearLocalStorage());
    navigate("/login");
  };

  return (
    <>
      <Nav />
      <div>
        <h1>Home</h1>
        <h3>Patients</h3>
        <button onClick={() => navigate("/dashboard")} type="button">
          Details of Patients
        </button>
        <ListPatients data={data} />
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    </>
  );
};
