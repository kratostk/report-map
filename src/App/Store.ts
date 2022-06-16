import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../Features/order/orderSlice";
import fleetReucer from "../Features/fleet/fleetSlice";
import { fleetsApi } from "../services/fleetApi";
import { vehiclesApi } from "../services/vehiclesApi";

const store = configureStore({
  reducer: {
    order: orderReducer,
    fleet: fleetReucer,
    [fleetsApi.reducerPath]: fleetsApi.reducer,
    [vehiclesApi.reducerPath]: vehiclesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fleetsApi.middleware, vehiclesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
