import { Doctor } from "../doctor.interface";

export interface PropsEditDoctorProfileTypes {
  data: Doctor | undefined;
  setEditProfileState: (value: boolean) => void;
}
