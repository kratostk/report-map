import React, { useState, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { StoreContext } from "../store";
import { isAuth as isAuthService } from "../services/auth";
import { useLocation } from "react-router-dom";

function RouteGuard(): JSX.Element {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { user, loggedIn } = useContext(StoreContext);

  /**
   * If user lands on home grab token in localStorage to authorize user.
   * if token is valid then access is granted otherwise reject to login page.
   */
  const checkAuth = async () => {
    try {
      const authUser = await isAuthService(localStorage.getItem("token"));
      loggedIn(authUser);
      setLoading(false);
      setIsAuth(true);
    } catch (err) {
      setLoading(false);
      setIsAuth(false);
    }
  };

  React.useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return !isAuth ? <Navigate to="/login" /> : <Outlet />;
}

export default RouteGuard;
