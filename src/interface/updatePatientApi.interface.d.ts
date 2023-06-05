import { PatientForm } from "./form/patientForm.interface";

export interface UpdatePatientApi {
  id: string | undefined;
  userUpdated: PatientForm;
}
