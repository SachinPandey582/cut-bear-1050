import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const {username} = useSelector((store) => store.login);

  if (
    username==null
    // (!user.userName || admin.adminName) &&
    // (user.userName || !admin.adminName)
  ) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;