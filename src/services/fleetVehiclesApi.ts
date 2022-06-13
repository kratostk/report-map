import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IVehicle {
  analog_level: number;
  course: number;
  distance: number;
  fleet_id: number;
  idx: number;
  in_out_status: number;
  lat: Array<number>;
  local_timestamp: string;
  lon: Array<number>;
  name: string;
  namet: string;
  no_of_satellite: number;
  ref_idx: number;
  rx_local_timestamp: string;
  speed: number;
  timestamp: Date;
  type_of_fix: number;
  type_of_msg: number;
  veh_id: Array<number>;
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
