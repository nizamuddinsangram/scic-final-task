import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-600 "></div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
