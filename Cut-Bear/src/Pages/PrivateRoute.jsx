import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
 
const store1 = useSelector((state) => state.Login);
console.log(store1);
  if (
    store1.value.userName==undefined
  ) {
    return <Navigate to="/signup" />;
  }

  return children;
};



export default PrivateRoute;