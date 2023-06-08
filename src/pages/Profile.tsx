import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "../components/Nav";
import { PropsProfileTypes } from "../interface/props/PropsProfile.interface";
import { EditDoctorProfile } from "../components/EditDoctorProfile";
import { useGetDoctorQuery } from "../api/apiSlice";
import { useDispatch } from "react-redux";
import { clearLocalStorage } from "../features/userSlice";

export const Profile: React.FC<PropsProfileTypes> = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useGetDoctorQuery(id || 0);
  const [editProfileState, setEditProfileState] = useState(false);

  const handleLogOut = () => {
    dispatch(clearLocalStorage());
    navigate("/login");
  };

  return (
    <>
      <Nav />
      {editProfileState && (
        <EditDoctorProfile
          data={data}
          setEditProfileState={setEditProfileState}
        />
      )}
      <div>
        <button onClick={handleLogOut}>Log Out</button>
        <button onClick={() => setEditProfileState(true)}>
          Edit Your Profile
        </button>
        <h1>Welcome {data?.name}</h1>
        <div>
          <h3>Your Info:</h3>
          <div>
            <p>Full Name: {data?.fullName}</p>
            <p>Age: {data?.age}</p>
            <p>Email: {data?.email}</p>
          </div>
          <Link to="/dashboard">Your patients</Link>
        </div>
      </div>
    </>
  );
};
