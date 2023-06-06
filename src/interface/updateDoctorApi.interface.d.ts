import { DoctorFormTypes } from "./form/doctorForm.interface";

export interface UpdateDoctorApiTypes {
  id: string;
  doctorUpdated: DoctorFormTypes;
}
