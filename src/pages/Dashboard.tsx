import { useState } from "react";
import { useSelector } from "react-redux";
import { Nav } from "../components/Nav";
import { RootState } from "../app/store";
import { useGetDoctorQuery } from "../api/apiSlice";
import { CreatePatient } from "../components/CreatePatient";
import { EditPatient } from "../components/EditPatient";
import { FormStateTypes } from "../interface/formState.interface";
import { ListPatients } from "../components/ListPatients";
import { Loader } from "../components/Loader";
import "../styles/Dashboard.scss";

export const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { data, isLoading } = useGetDoctorQuery(user?.data.id || 0);
  const [formState, setFormState] = useState<FormStateTypes>({
    updateState: false,
    newPatientState: false,
    id: 0,
    payload: {
      name: "",
      fullName: "",
      email: "",
      number: "",
      age: 0,
      address: "",
      height: 0,
      weight: 0,
      married: false,
      children: 0,
    },
  });

  if (isLoading) return <Loader />;
  return (
    <>
      <Nav />
      {formState.updateState && (
        <EditPatient formState={formState} setFormState={setFormState} />
      )}
      {formState.newPatientState && (
        <CreatePatient
          doctorId={data?.id || 0}
          formState={formState}
          setFormState={setFormState}
        />
      )}
      <div className="dashboard__container">
        <button
          className="dashboard__newPatient__button"
          onClick={() => setFormState({ ...formState, newPatientState: true })}
        >
          New Patient
        </button>
        {data?.patients?.length === 0 ? (
          <p>You don't have patients</p>
        ) : (
          <ListPatients
            data={data}
            formState={formState}
            setFormState={setFormState}
          />
        )}
      </div>
    </>
  );
};
