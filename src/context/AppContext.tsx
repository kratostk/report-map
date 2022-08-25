import React, { createContext, useReducer } from "react";
import { Fleet, User } from "./app.type";
import { fleetsReducer } from "./fleetsReducer";
import { userReducer } from "./userReducer";

type InitialState = {
  fleets: Array<Fleet>;
  user: User | null;
};

const initialState = {
  fleets: [],
  user: null,
};

const AppContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const rootReducer = (
  { fleets, user }: InitialState,
  action: any
): InitialState => ({
  fleets: fleetsReducer(fleets, action),
  user: userReducer(user, action),
});

const AppProvider = (children: React.ReactNode) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
