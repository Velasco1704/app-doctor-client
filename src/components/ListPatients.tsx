import { PropsListPatients } from "../interface/props/PropsListPatients.interface";

export const ListPatients: React.FC<PropsListPatients> = ({ data }) => {
  return (
    <div>
      {data?.patients?.length === 0 ? (
        <p>You don't have patients</p>
      ) : (
        data?.patients?.map((patient) => (
          <div key={patient.id}>
            <h4>{patient.fullName}</h4>
            <p>{patient.age}</p>
          </div>
        ))
      )}
    </div>
  );
};
