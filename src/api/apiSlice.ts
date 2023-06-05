import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignInForm } from "../interface/signIn.interface";
import { SignUpForm } from "../interface/signUp.interface";
import { UpdatePatientApi } from "../interface/updatePatientApi.interface";
import { Doctor } from "../interface/doctor.interface";
import { CreatePatientTypes } from "../interface/createPatient.interface";
import { Patient } from "../interface/patient.interface";

export const doctorsApi = createApi({
  reducerPath: "doctorsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app-doctor-server-4b5d.up.railway.app/api",
  }),
  tagTypes: ["Doctors"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload: SignInForm) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),
    register: builder.mutation({
      query: (payload: SignUpForm) => ({
        url: "/create-doctor",
        method: "POST",
        body: payload,
      }),
    }),
    getDoctor: builder.query<Doctor, number>({
      query: (id: number) => `/doctors/${id}`,
      providesTags: ["Doctors"],
    }),
    getPatientById: builder.query<Patient, string | undefined>({
      query: (id: string) => `/patients/${id}`,
    }),
    createPatient: builder.mutation({
      query: (newPatient: CreatePatientTypes) => ({
        url: "/create-patient",
        method: "POST",
        body: newPatient,
      }),
      invalidatesTags: ["Doctors"],
    }),
    updatePatient: builder.mutation({
      query: (payload: UpdatePatientApi) => ({
        url: `/update-patient/${payload.id}`,
        method: "PUT",
        body: payload.userUpdated,
      }),
      invalidatesTags: ["Doctors"],
    }),
    deletePatient: builder.mutation<number, number>({
      query: (id: number) => ({
        url: `/patients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Doctors"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetDoctorQuery,
  useGetPatientByIdQuery,
  useCreatePatientMutation,
  useUpdatePatientMutation,
  useDeletePatientMutation,
} = doctorsApi;
