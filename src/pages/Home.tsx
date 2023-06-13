import { Nav } from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { PatientsTable } from "../components/PatientsTable.tsx";
import { useSelector } from "react-redux";
import { useGetDoctorQuery } from "../api/apiSlice.ts";
import { RootState } from "../app/store.ts";
import { Loader } from "../components/Loader.tsx";
import { HiArrowRight } from "react-icons/hi";
import "../styles/Home.scss";

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);
  const { data, isLoading } = useGetDoctorQuery(user?.data.id || 0);

  if (isLoading) return <Loader />;
  return (
    <>
      <Nav />
      <div className="home__container">
        {data?.patients?.length === 0 ? (
          <button
            className="home__button home__button__newPatient"
            onClick={() => navigate("/dashboard")}
            type="button"
          >
            Create a Patient{" "}
            <span className="home__button__newPatient__span">
              <HiArrowRight />
            </span>
          </button>
        ) : (
          <button
            className="home__button"
            onClick={() => navigate("/dashboard")}
            type="button"
          >
            Edit Profile Patients
          </button>
        )}

        <PatientsTable data={data} />
      </div>
    </>
  );
};
