import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "../components/Nav";
import { PropsProfileTypes } from "../interface/props/PropsProfile.interface";
import { EditDoctorProfile } from "../components/EditDoctorProfile";
import { useGetDoctorQuery } from "../api/apiSlice";
import { useDispatch } from "react-redux";
import { clearLocalStorage } from "../features/userSlice";
import "../styles/Profile.scss";
import { Loader } from "../components/Loader";

export const Profile: React.FC<PropsProfileTypes> = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useGetDoctorQuery(id || 0);
  const [editProfileState, setEditProfileState] = useState(false);

  const handleLogOut = () => {
    dispatch(clearLocalStorage());
    navigate("/login");
  };

  if (isLoading) return <Loader />;
  return (
    <>
      <Nav />
      {editProfileState && (
        <EditDoctorProfile
          data={data}
          setEditProfileState={setEditProfileState}
        />
      )}
      <div className="profile__container">
        <div className="profile__buttons__container">
          <button className="profile__button" onClick={handleLogOut}>
            Log Out
          </button>
          <button
            className="profile__button"
            onClick={() => setEditProfileState(true)}
          >
            Edit Your Profile
          </button>
        </div>
        <div className="profile__info">
          <h3 className="profile__info__h3">Your Info</h3>
          <div className="profile__info__container">
            <div className="profile__info__label__container">
              <label className="profile__info__label">Full Name</label>
              <p className="profile__info__p">{data?.fullName}</p>
            </div>
            <div className="profile__info__label__container">
              <label className="profile__info__label">Age</label>
              <p className="profile__info__p">{data?.age}</p>
            </div>
            <div className="profile__info__label__container">
              <label className="profile__info__label">Email</label>
              <p className="profile__info__p">{data?.email}</p>
            </div>
          </div>
          <Link className="profile__info__link" to="/dashboard">
            Your patients
          </Link>
        </div>
      </div>
    </>
  );
};
