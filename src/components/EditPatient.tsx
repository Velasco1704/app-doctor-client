import { useEffect } from "react";
import { useUpdatePatientMutation } from "../api/apiSlice";
import { PropsEditPatientTypes } from "../interface/props/PropsEditPatient.interface";

export const EditPatient: React.FC<PropsEditPatientTypes> = ({
  formState,
  setFormState,
}) => {
  const [updatePatient, { isSuccess, isError }] = useUpdatePatientMutation();
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatePatient({
      id: `${formState.id}`,
      userUpdated: formState.payload,
    });
  };

  useEffect(() => {
    isSuccess && setFormState({ ...formState, updateState: false });
  }, [formState, isSuccess, setFormState]);

  return (
    <div>
      {isError && <p>Error</p>}

      <form onSubmit={handleSubmit}>
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, name: target.value },
            })
          }
          value={formState.payload.name}
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
          value={formState.payload.fullName}
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
          value={formState.payload.age}
          placeholder="Age"
          name="age"
          type="text"
        />
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, email: target.value },
            })
          }
          value={formState.payload.email}
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
          value={formState.payload.address}
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
          value={formState.payload.number}
          placeholder="Contact Number"
          name="number"
          type="text"
        />
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, height: +target.value },
            })
          }
          value={formState.payload.height}
          placeholder="Height (CM)"
          name="height"
          type="text"
        />
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, weight: +target.value },
            })
          }
          value={formState.payload.weight}
          placeholder="Weight (KG)"
          name="weight"
          type="text"
        />
        <input
          onChange={({ target }) =>
            setFormState({
              ...formState,
              payload: { ...formState.payload, children: +target.value },
            })
          }
          value={formState.payload.children}
          placeholder="Children"
          name="children"
          type="text"
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
            checked={formState.payload.married}
            type="checkbox"
            name="married"
          />
        </div>
        <div>
          <button
            onClick={() => setFormState({ ...formState, updateState: false })}
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
