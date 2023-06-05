import { useEffect } from "react";
import { PropsCreatePatient } from "../interface/props/PropsCreatePatient.interface";
import { useCreatePatientMutation } from "../api/apiSlice";

export const CreatePatient: React.FC<PropsCreatePatient> = ({
  doctorId,
  formState,
  setFormState,
}) => {
  const [createPatient, { isSuccess, isError }] = useCreatePatientMutation();
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPatient({
      ...formState.payload,
      doctorId,
    });
  };

  useEffect(() => {
    isSuccess && setFormState({ ...formState, newPatientState: false });
  }, [formState, isSuccess, setFormState]);

  return (
    <div>
      <h1>New Patient</h1>
      {isError && <p>Error</p>}
      <form onSubmit={handleSubmit}>
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, name: target.value },
            })
          }
          placeholder="Name"
          name="name"
          type="text"
        />
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, fullName: target.value },
            })
          }
          placeholder="Full Name"
          name="fullName"
          type="text"
        />
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, age: +target.value },
            })
          }
          placeholder="Age"
          name="age"
          type="number"
        />
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, email: target.value },
            })
          }
          placeholder="Email"
          name="email"
          type="email"
        />
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, address: target.value },
            })
          }
          placeholder="Address"
          name="address"
          type="text"
        />
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, number: target.value },
            })
          }
          placeholder="Contact Number"
          name="number"
          type="number"
        />
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, height: +target.value },
            })
          }
          placeholder="Height (CM)"
          name="height"
          type="number"
        />
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, weight: +target.value },
            })
          }
          placeholder="Weight (KG)"
          name="weight"
          type="number"
        />
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, children: +target.value },
            })
          }
          placeholder="Children"
          name="children"
          type="number"
        />
        <div>
          <label>Married:</label>
          <input
            onChange={({ target }) =>
              setFormState({
                ...formState,
                payload: { ...formState.payload, married: target.checked },
              })
            }
            type="checkbox"
            name="married"
          />
        </div>
        <div>
          <button
            onClick={() =>
              setFormState({ ...formState, newPatientState: false })
            }
            type="button"
          >
            cancel
          </button>
          <button type="submit">save</button>
        </div>
      </form>
    </div>
  );
};
