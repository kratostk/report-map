import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IFleet {
  user_id: number;
  name: string;
  address: string;
  tel_no: string;
  fleet_desc: string;
  fleet_id: string;
}

type IFleets = IFleet[];

const Data = {
  fleet: [],
};

export const fleetApi = createApi({
  reducerPath: "fleetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    fleets: builder.query<IFleets, void>({
      query: () => "/api/fleet",
    }),
  }),
});

export const { useFleetsQuery } = fleetApi;
