import { Doctor } from "../doctor.interface";
import { FormStateTypes } from "../formState.interface";

export interface PropsListPatientsTypes {
  data: Doctor | undefined;
  formState: FormStateTypes;
  setFormState: (value: FormStateTypes) => void;
}
