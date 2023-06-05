import { FormStateTypes } from "../formState.interface";

export interface PropsEditPatientTypes {
  formState: FormStateTypes;
  setFormState: (value: FormStateTypes) => void;
}
