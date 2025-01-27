import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./Common/ProtectedRoute"; // Import Protected Route
import Login from "./Pages/Login";
import Layout from "./Pages/Layout";
import ForgotPassword from "./Pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ForgotPassword />} />

          {/* Protected Route */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
          
          </Route>

          {/* Redirect unknown routes to Login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
