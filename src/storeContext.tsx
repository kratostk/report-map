import React, { useState, ReactNode } from "react";

export interface IUser {
  username: string;
  email: string;
  token: string;
  name: string;
}

export interface IFleet {
  fleet_id: string;
  fleet_desc: string;
}

interface StoreContextType {
  user: IUser | null;
  loggedIn: (u: IUser) => void;
  loggedOut: () => void;
  showFleets: boolean;
  openFleets: () => void;
  closeFleets: () => void;
  fleetsData: IFleet[] | null;
  fetchFleets: (f: IFleet[]) => void;
}

const initState = {
  user: null,
  loggedIn: () => {},
  loggedOut: () => {},
  showFleets: false,
  openFleets: () => {},
  closeFleets: () => {},
  fleetsData: null,
  fetchFleets: () => {},
};

const StoreContext = React.createContext<StoreContextType>(initState);

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const StoreProvider = ({ children, ...props }: Props) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [fleetsData, setFleetsData] = useState<IFleet[] | null>(null);
  const [showFleets, setShowFleets] = useState<boolean>(false);
  const openFleets = () => setShowFleets(true);
  const closeFleets = () => setShowFleets(false);
  const loggedIn = (u: IUser) => setUser(u);
  const loggedOut = () => {
    setUser(null);
    localStorage.removeItem("token");
  };
  const fetchFleets = (f: IFleet[]) => setFleetsData(f);

  const store = React.useMemo(
    () => ({
      user,
      loggedIn,
      loggedOut,
      showFleets,
      openFleets,
      closeFleets,
      fleetsData,
      fetchFleets,
    }),
    [user, fleetsData]
  );

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
