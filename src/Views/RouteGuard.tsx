import { useState, useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { StoreContext } from "../storeContext";
import { isAuth as isAuthService } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { NyanAlert } from "../utils/NyanSwal";

function RouteGuard(): JSX.Element {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { loggedIn } = useContext(StoreContext);
  const navigate = useNavigate();

  /**
   * WHEN USER LANDS ON THE HOME PAGE GRAB TOKEN IN LOCALSTORAGE AND MAKE A REQUEST TO AUTHORIZE USER
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
      navigate("/login");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  return !isAuth ? <Navigate to="/login" /> : <Outlet />;
}

export default RouteGuard;
