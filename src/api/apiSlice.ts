import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignInForm } from "../interface/signIn.interface";
import { SignUpForm } from "../interface/signUp.interface";

export const doctorsApi = createApi({
  reducerPath: "doctorsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app-doctor-server-4b5d.up.railway.app/api",
  }),
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
  }),
});

export const { useLoginMutation, useRegisterMutation } = doctorsApi;
