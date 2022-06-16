import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IUser {
  username: string;
  email: string;
}

interface IToken {
  accessToken: string;
}

interface IAuth {
  data: IUser;
  token: IToken;
}

export type Login = {
  username: string | null;
  password: string | null;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    loggedin: builder.mutation<IAuth, Login>({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useLoggedinMutation } = userApi;
