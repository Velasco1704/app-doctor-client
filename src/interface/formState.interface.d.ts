import { PatientForm } from "./form/patientForm.interface";

export interface FormStateTypes {
  updateState: boolean;
  newPatientState: boolean;
  id: number;
  payload: PatientForm;
}
