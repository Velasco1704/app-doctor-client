import { useDeletePatientMutation } from "../api/apiSlice";
import { PropsListPatientsTypes } from "../interface/props/PropsListPatients.interface";
import "../styles/ListPatients.scss";

export const ListPatients: React.FC<PropsListPatientsTypes> = ({
  data,
  formState,
  setFormState,
}) => {
  const [deletePatient] = useDeletePatientMutation();
  const handleDeletePatient = (id: number) => deletePatient(id);
  return (
    <div className="listPatients__container">
      {data?.patients?.map((patient) => (
        <div className="listPatients__card" key={patient.id}>
          <div className="listPatients__card__info">
            <h3 className="listPatients__card__info__h3">{patient.name}</h3>
            <hr />
            <ul className="listPatients__card__info__ul">
              <li className="listPatients__card__info__li">
                Full Name: {patient.fullName}
              </li>
              <li className="listPatients__card__info__li">
                Age: {patient.age}
              </li>
              <li className="listPatients__card__info__li">
                Height: {patient.height}cm
              </li>
              <li className="listPatients__card__info__li">
                Weight: {patient.weight}kg
              </li>
              <li className="listPatients__card__info__li">
                Married: {patient.married ? "Yes" : "No"}
              </li>
              <li className="listPatients__card__info__li">
                Children: {patient.children === 0 ? "No" : patient.children}
              </li>
            </ul>
          </div>
          <div className="listPatients__card__contact">
            <h3 className="listPatients__card__contact__h3">Contact</h3>
            <hr />
            <ul className="listPatients__card__contact__ul">
              <li className="listPatients__card__contact__li">
                Address: {patient.address}
              </li>
              <li className="listPatients__card__contact__li">
                Email: {patient.email}
              </li>
              <li className="listPatients__card__contact__li">
                Number: {patient.number}
              </li>
            </ul>
          </div>
          <div className="listPatients__card__buttons">
            <button
              className="listPatients__card__button listPatients__edit__button"
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
              EDIT
            </button>
            <button
              className="listPatients__card__button listPatients__delete__button"
              onClick={() => handleDeletePatient(patient.id)}
              type="button"
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
