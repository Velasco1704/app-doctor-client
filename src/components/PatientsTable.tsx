import { PropsPatientsTableTypes } from "../interface/props/PropsPatientsTable.interface";
import "../styles/PatientsTable.scss";

export const PatientsTable: React.FC<PropsPatientsTableTypes> = ({ data }) => {
  return (
    <div className="patientsTable__container">
      {data?.patients?.length === 0 ? (
        <h1 className="patientsTable__h1">You don't have patients</h1>
      ) : (
        <table className="patientsTable__table">
          <tbody className="patientsTable__tbody">
            <tr className="patientsTable__tr">
              <th className="patientsTable__th">Nombre</th>
              <th className="patientsTable__th">Full Name</th>
              <th className="patientsTable__th">Age</th>
              <th className="patientsTable__th">Height</th>
              <th className="patientsTable__th">Weight</th>
              <th className="patientsTable__th">Married</th>
              <th className="patientsTable__th">Children</th>
              <th className="patientsTable__th">Email</th>
              <th className="patientsTable__th">Number</th>
              <th className="patientsTable__th">Address</th>
            </tr>
            {data?.patients?.map((patient) => (
              <tr className="patientsTable__tr" key={patient.id}>
                <td className="patientsTable__td">{patient.name}</td>
                <td className="patientsTable__td">{patient.fullName}</td>
                <td className="patientsTable__td">{patient.age}</td>
                <td className="patientsTable__td">{patient.height}cm</td>
                <td className="patientsTable__td">{patient.weight}kg</td>
                <td className="patientsTable__td">
                  {patient.married ? "Yes" : "No"}
                </td>
                <td className="patientsTable__td">
                  {patient.children === 0 ? "No" : patient.children}
                </td>
                <td className="patientsTable__td">{patient.email}</td>
                <td className="patientsTable__td">{patient.number}</td>
                <td className="patientsTable__td">{patient.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
