import { useState, useEffect } from "react";
import { PropsEditDoctorProfileTypes } from "../interface/props/PropsEditDoctorProfile.interface";
import { DoctorFormTypes } from "../interface/form/doctorForm.interface";
import { useUpdateDoctorProfileMutation } from "../api/apiSlice";

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
    <div>
      <h1>Edit your profile</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          onChange={({ target }) =>
            setFormEditProfile({ ...formEditProfile, name: target.value })
          }
          value={formEditProfile.name || ""}
          type="text"
          name="name"
        />
        <label>Full Name:</label>
        <input
          onChange={({ target }) =>
            setFormEditProfile({ ...formEditProfile, fullName: target.value })
          }
          value={formEditProfile.fullName || ""}
          type="text"
          name="fullName"
        />
        <label>Age:</label>
        <input
          onChange={({ target }) =>
            setFormEditProfile({ ...formEditProfile, age: +target.value })
          }
          value={formEditProfile.age || 0}
          type="number"
          name="age"
        />
        <label>Email:</label>
        <input
          onChange={({ target }) =>
            setFormEditProfile({ ...formEditProfile, email: target.value })
          }
          value={formEditProfile.email || ""}
          type="email"
          name="email"
        />
        <label>Change Your Password(Optional)</label>
        <input
          onChange={({ target }) =>
            setFormEditProfile({ ...formEditProfile, password: target.value })
          }
          type="password"
          name="password"
          id=""
        />
        <button onClick={() => setEditProfileState(false)}>cancel</button>
        <button type="submit">save</button>
      </form>
    </div>
  );
};
