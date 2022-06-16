import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IFleet {
<<<<<<< HEAD
  fleet_id: number;
=======
  fleet_id: string;
>>>>>>> af1cc2c931555e2b0cf2c0df636ea4c0c4b80fd8
  fleet_desc: string;
}

export const fleetsApi = createApi({
  reducerPath: "fleetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
<<<<<<< HEAD
    fleets: builder.query<IFleet[], string>({
      query: (loginName) => `/api/usrfleets/${loginName}`,
=======
    fleets: builder.query<IFleets, void>({
      query: () => "/api/fleets",
>>>>>>> af1cc2c931555e2b0cf2c0df636ea4c0c4b80fd8
    }),
  }),
});

export const { useFleetsQuery } = fleetsApi;
