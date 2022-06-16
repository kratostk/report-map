import { configureStore } from "@reduxjs/toolkit";
import { fleetsApi } from "../services/fleetApi";
import { vehiclesApi } from "../services/vehiclesApi";
import { userApi } from "../services/userApi";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, userApi.reducer);

const store = configureStore({
  reducer: {
    [fleetsApi.reducerPath]: fleetsApi.reducer,
    [vehiclesApi.reducerPath]: vehiclesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    tokens: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(fleetsApi.middleware, vehiclesApi.middleware, userApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
