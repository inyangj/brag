import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const RequireAuth = () => {
  const { auth } = useAuth();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const location = useLocation();

  return user?.refreshToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
