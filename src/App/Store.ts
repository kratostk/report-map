import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../Features/order/orderSlice";
import fleetReucer from "../Features/fleet/fleetSlice";
import { fleetApi } from "../services/fleetApi";
import { fleetVehiclesApi } from "../services/fleetVehiclesApi";

const store = configureStore({
  reducer: {
    order: orderReducer,
    fleet: fleetReucer,
    [fleetApi.reducerPath]: fleetApi.reducer,
    [fleetVehiclesApi.reducerPath]: fleetVehiclesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      fleetApi.middleware,
      fleetVehiclesApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
