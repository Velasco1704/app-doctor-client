import { useState, useEffect } from "react";
import { PropsEditDoctorProfileTypes } from "../interface/props/PropsEditDoctorProfile.interface";
import { DoctorFormTypes } from "../interface/form/doctorForm.interface";
import { useUpdateDoctorProfileMutation } from "../api/apiSlice";
import "../styles/EditDoctorProfile.scss";

export const EditDoctorProfile: React.FC<PropsEditDoctorProfileTypes> = ({
  data,
  setEditProfileState,
}) => {
  const [updateProfileDoctor, { isSuccess }] = useUpdateDoctorProfileMutation();
  const [formEditProfile, setFormEditProfile] = useState<DoctorFormTypes>({
    name: data?.name,
    fullName: data?.fullName,
    age: data?.age,
    email: data?.email,
    password: data?.password,
  });
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfileDoctor({
      id: `${data?.id}`,
      doctorUpdated: formEditProfile,
    });
  };

  useEffect(() => {
    isSuccess && setEditProfileState(false);
  }, [isSuccess, setEditProfileState]);

  return (
    <div className="editDoctorProfile__container">
      <h1 className="editDoctorProfile__h1">Edit your profile</h1>
      <form className="editDoctorProfile__form" onSubmit={handleSubmit}>
        <div className="editDoctorProfile__input__container">
          <label className="editDoctorProfile__form__label">Name:</label>
          <input
            autoComplete="off"
            className="editDoctorProfile__form__input"
            onChange={({ target }) =>
              setFormEditProfile({ ...formEditProfile, name: target.value })
            }
            value={formEditProfile.name || ""}
            type="text"
            name="name"
          />
        </div>
        <div className="editDoctorProfile__input__container">
          <label className="editDoctorProfile__form__label">Full Name:</label>
          <input
            autoComplete="off"
            className="editDoctorProfile__form__input"
            onChange={({ target }) =>
              setFormEditProfile({ ...formEditProfile, fullName: target.value })
            }
            value={formEditProfile.fullName || ""}
            type="text"
            name="fullName"
          />
        </div>
        <div className="editDoctorProfile__input__container">
          <label className="editDoctorProfile__form__label">Age:</label>
          <input
            autoComplete="off"
            className="editDoctorProfile__form__input"
            onChange={({ target }) =>
              setFormEditProfile({ ...formEditProfile, age: +target.value })
            }
            value={formEditProfile.age || 0}
            type="number"
            name="age"
          />
        </div>
        <div className="editDoctorProfile__input__container">
          <label className="editDoctorProfile__form__label">Email:</label>
          <input
            autoComplete="off"
            className="editDoctorProfile__form__input"
            onChange={({ target }) =>
              setFormEditProfile({ ...formEditProfile, email: target.value })
            }
            value={formEditProfile.email || ""}
            type="email"
            name="email"
          />
        </div>
        <div className="editDoctorProfile__input__container">
          <label className="editDoctorProfile__form__label">
            Change Password
          </label>
          <input
            autoComplete="off"
            className="editDoctorProfile__form__input"
            onChange={({ target }) =>
              setFormEditProfile({ ...formEditProfile, password: target.value })
            }
            type="password"
            name="password"
            id=""
          />
        </div>
        <div className="editDoctorProfile__buttons__container">
          <button
            className="editDoctorProfile__form__button editDoctorProfile__button__cancel"
            onClick={() => setEditProfileState(false)}
          >
            CANCEL
          </button>
          <button
            className="editDoctorProfile__form__button editDoctorProfile__button__save"
            type="submit"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};
