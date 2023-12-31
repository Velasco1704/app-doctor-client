import { useEffect } from "react";
import { useUpdatePatientMutation } from "../api/apiSlice";
import { PropsEditPatientTypes } from "../interface/props/PropsEditPatient.interface";
import "../styles/EditPatient.scss";

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
    <div className="editPatient__container">
      {isError && <p>Error</p>}

      <form className="editPatient__form" onSubmit={handleSubmit}>
        <div className="editPatient__form__inputs__container">
          <div className="editPatient__form__input__container">
            <label className="editPatient__form__label">Name:</label>
            <input
              autoComplete="off"
              className="editPatient__form__input"
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
          </div>
          <div className="editPatient__form__input__container">
            <label className="editPatient__form__label">Full Name:</label>
            <input
              autoComplete="off"
              className="editPatient__form__input"
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
          </div>
          <div className="editPatient__form__input__container">
            <label className="editPatient__form__label">Age:</label>
            <input
              autoComplete="off"
              className="editPatient__form__input"
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
          </div>
          <div className="editPatient__form__input__container">
            <label className="editPatient__form__label">Email:</label>
            <input
              autoComplete="off"
              className="editPatient__form__input"
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
          </div>
          <div className="editPatient__form__input__container">
            <label className="editPatient__form__label">Address:</label>
            <input
              autoComplete="off"
              className="editPatient__form__input"
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
          </div>
          <div className="editPatient__form__input__container">
            <label className="editPatient__form__label">Contact Number:</label>
            <input
              autoComplete="off"
              className="editPatient__form__input"
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
          </div>
          <div className="editPatient__form__input__container">
            <label className="editPatient__form__label">Height:</label>
            <input
              autoComplete="off"
              className="editPatient__form__input"
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
          </div>
          <div className="editPatient__form__input__container">
            <label className="editPatient__form__label">Weight:</label>
            <input
              autoComplete="off"
              className="editPatient__form__input"
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
          </div>
          <div className="editPatient__form__input__container">
            <label className="editPatient__form__label">Children:</label>
            <input
              autoComplete="off"
              className="editPatient__form__input"
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
          </div>
        </div>
        <div className="editPatient__form__container__checkbox">
          <label className="editPatient__form__label__married">Married:</label>
          <input
            className="editPatient__form__checkbox"
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
        <div className="editPatient__form__buttons">
          <button
            className="editPatient__form__button editPatient__form__cancel"
            onClick={() => setFormState({ ...formState, updateState: false })}
            type="button"
          >
            CANCEL
          </button>
          <button
            className="editPatient__form__button editPatient__form__save"
            type="submit"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};
