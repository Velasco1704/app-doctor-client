import { useState } from "react";
import { useSelector } from "react-redux";
import { Nav } from "../components/Nav";
import { RootState } from "../app/store";
import { useDeletePatientMutation, useGetDoctorQuery } from "../api/apiSlice";
import { CreatePatient } from "../components/CreatePatient";
import { EditPatient } from "../components/EditPatient";
import { FormStateTypes } from "../interface/formState.interface";

export const Dashboard = () => {
  const { userId } = useSelector((state: RootState) => state.userId);
  const [deletePatient] = useDeletePatientMutation();
  const { data, isLoading } = useGetDoctorQuery(userId);
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

  const handleDeletePatient = (id: number) => deletePatient(id);
  if (isLoading) return <h1>Loading...</h1>;
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
      <div>
        <button
          onClick={() => setFormState({ ...formState, newPatientState: true })}
        >
          New Patient
        </button>
        {data?.patients?.length === 0 ? (
          <p>You don't have patients</p>
        ) : (
          data?.patients?.map((patient) => (
            <div key={patient.id}>
              <div>
                <h2>Name: {patient.name}</h2>
                <p>Full Name: {patient.fullName}</p>
                <p>Age: {patient.age}</p>
                <p>Height: {patient.height}cm</p>
                <p>Weight: {patient.weight}kg</p>
              </div>
              <div>
                <div>
                  <h3>Info</h3>
                  <p>Married: {patient.married ? "Yes" : "No"}</p>
                  <p>
                    Children: {patient.children === 0 ? "No" : patient.children}
                  </p>
                  <p>Address: {patient.address}</p>
                  <div>
                    <h4>Contact:</h4>
                    <p>Email: {patient.email}</p>
                    <p>Number: {patient.number}</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() =>
                    setFormState({
                      ...formState,
                      updateState: true,
                      id: patient.id,
                      payload: patient,
                    })
                  }
                  type="button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePatient(patient.id)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
