import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../Features/order/orderSlice";
import fleetReucer  from "../Features/fleet/fleetSlice";

const store = configureStore({
    reducer: {
        order: orderReducer,
        fleet: fleetReucer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;  