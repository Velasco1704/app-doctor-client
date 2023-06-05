import { Patient } from "./patient.interface";

export type CreatePatientTypes = Omit<Patient, "id">;
