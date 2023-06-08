import { useEffect } from "react";
import { PropsCreatePatientTypes } from "../interface/props/PropsCreatePatient.interface";
import { useCreatePatientMutation } from "../api/apiSlice";
import "../styles/CreatePatient.scss";

export const CreatePatient: React.FC<PropsCreatePatientTypes> = ({
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
    <div className="createPatient__container">
      <h1 className="createPatient__h1">New Patient</h1>
      {isError && <p>Error</p>}
      <form className="createPatient__form" onSubmit={handleSubmit}>
        <div className="createPatient__form__inputs__container">
          <input
            className="createPatient__form__input"
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
            className="createPatient__form__input"
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
            className="createPatient__form__input"
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
            className="createPatient__form__input"
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
            className="createPatient__form__input"
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
            className="createPatient__form__input"
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
            className="createPatient__form__input"
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
            className="createPatient__form__input"
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
            className="createPatient__form__input"
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
        </div>
        <div className="createPatient__form__container__checkbox">
          <label className="createPatient__form__label">Married:</label>
          <input
            className="createPatient__form__checkbox"
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
        <div className="createPatient__form__buttons">
          <button
            className="createPatient__form__button createPatient__form__cancel"
            onClick={() =>
              setFormState({ ...formState, newPatientState: false })
            }
            type="button"
          >
            CANCEL
          </button>
          <button
            className="createPatient__form__button createPatient__form__save"
            type="submit"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};
