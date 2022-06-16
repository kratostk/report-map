import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IVehicle {
  fleet_id: number;
  veh_id: number;
  registration: string;
  lat: number;
  lon: number;
  local_timestamp: Date;
  speed: number;
  name: string;
  namt: string;
  distance: number;
  evt_id: string;
  Status: string;
}

export const vehiclesApi = createApi({
  reducerPath: "vehiclesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getVehicles: builder.query<IVehicle[], string | undefined>({
      query: (fleetId) => `/api/fleet/vehicles/${fleetId}`,
    }),
  }),
});

export const { useGetVehiclesQuery } = vehiclesApi;
