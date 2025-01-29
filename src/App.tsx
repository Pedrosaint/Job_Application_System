import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./Common/ProtectedRoute"; // Import Protected Route
import Login from "./Pages/Login";
import Layout from "./Pages/Layout";
import ForgotPassword from "./Pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import JobApp from "./Components/JobApp/JobApp";
import Settings from "./Components/Settings/Settings";



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
            <Route index element={<Dashboard />} />
            <Route path="/job" element={<JobApp />} />
            <Route path="/settings" element={<Settings />} />
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
