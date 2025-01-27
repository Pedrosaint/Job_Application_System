import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase"; // Adjust the path based on your setup

interface ProtectedRoutesProps {
  children: ReactNode; // Accepts React children
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const user = auth.currentUser; // Ensure auth.currentUser is typed correctly in your Firebase setup

  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
