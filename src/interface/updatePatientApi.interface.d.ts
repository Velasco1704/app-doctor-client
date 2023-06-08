import { PatientForm } from "./form/patientForm.interface";

export interface UpdatePatientApiTypes {
  id: string | undefined;
  userUpdated: PatientForm;
}
