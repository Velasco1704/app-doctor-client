import { Doctor } from "./doctor.interface";

export interface SessionDataTypes {
  data: Doctor;
  success: string;
  token: string;
}
