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
    vehicles: builder.mutation<IVehicle[], string>({
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

export const { useVehiclesMutation } = vehiclesApi;
