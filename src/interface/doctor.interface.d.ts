import { Patient } from "./patient.interface";

export interface Doctor {
  id: number;
  name: string;
  fullName: string;
  age: number;
  email: string;
  password: string;
  patients?: Patient[];
}
