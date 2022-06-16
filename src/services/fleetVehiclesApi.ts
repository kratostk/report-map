import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IVehicle {
  Status: string;
  Temp1: string;
  Temp2: string;
  distance: number;
  evt_id: number;
  fleet_id: number;
  lat: number;
  local_timestamp: string;
  lon: number;
  name: string;
  namt: string;
  registration: string;
  speed: number;
  veh_id: number;
}

type IVehicles = IVehicle[];

export const fleetVehiclesApi = createApi({
  reducerPath: "fleetVehiclesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    fleetVehicles: builder.mutation<IVehicles, string>({
      query: (fleetId) => {
        console.log(fleetId);
        return {
          url: "/api/fleet/vehicles",
          method: "POST",
          body: { fleetId },
        };
      },
    }),
  }),
});

export const { useFleetVehiclesMutation } = fleetVehiclesApi;
