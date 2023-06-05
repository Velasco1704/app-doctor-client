import { FormStateTypes } from "../formState.interface";

export interface PropsCreatePatient {
  doctorId: number;
  formState: FormStateTypes;
  setFormState: (value: FormStateTypes) => void;
}
