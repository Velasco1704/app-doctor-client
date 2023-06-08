import { FormStateTypes } from "../formState.interface";

export interface PropsCreatePatientTypes {
  doctorId: number;
  formState: FormStateTypes;
  setFormState: (value: FormStateTypes) => void;
}
