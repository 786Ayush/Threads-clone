import React from "react";
import { useSelector } from "react-redux";
import { selectUserData } from "../userSlice";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const userData = useSelector(selectUserData);
  if (!userData) {
    return <Navigate to="/login" replace={true} />;
  }
  return children ;
};

export default Protected;
