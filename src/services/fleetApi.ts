import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IFleet {
  fleet_id: number;
  fleet_desc: string;
}

export const fleetsApi = createApi({
  reducerPath: "fleetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    fleets: builder.query<IFleet[], string>({
      query: (loginName) => `/api/usrfleets/${loginName}`,
    }),
  }),
});

export const { useFleetsQuery } = fleetsApi;
