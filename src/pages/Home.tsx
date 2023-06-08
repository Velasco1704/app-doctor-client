import { Nav } from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { PatientsTable } from "../components/PatientsTable.tsx";
import { useSelector } from "react-redux";
import { useGetDoctorQuery } from "../api/apiSlice.ts";
import { RootState } from "../app/store.ts";
import "../styles/Home.scss";
import { Loader } from "../components/Loader.tsx";

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);
  const { data, isLoading } = useGetDoctorQuery(user?.data.id || 0);

  if (isLoading) return <Loader />;
  return (
    <>
      <Nav />
      <div className="home__container">
        <button
          className="home__button"
          onClick={() => navigate("/dashboard")}
          type="button"
        >
          Edit Profile Patients
        </button>
        <PatientsTable data={data} />
      </div>
    </>
  );
};
