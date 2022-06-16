import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IFleet {
  fleet_id: string;
  fleet_desc: string;
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
      query: () => "/api/fleets",
    }),
  }),
});

export const { useFleetsQuery } = fleetApi;
