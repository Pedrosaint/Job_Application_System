import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from "./Common/ProtectedRoute";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import JobApp from "./Components/JobApp/JobApp";
import Settings from "./Components/Settings/Settings";
import { ToastContainer } from "react-toastify";
import InviteTM from "./Components/Settings/InviteTM";
import AddComapnyLocation from "./Components/Settings/AddComapnyLocation";
import JopPosting from "./Components/Settings/JopPosting";
import CareersPage from "./Components/Settings/CareersPage";
import JopOpening from "./Components/JobApp/JobOpening/JopOpening";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Redirect root path `/` to `/login` */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<ForgotPassword />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />

          {/*--------- Nexted Route --------*/}
          <Route path="job" element={<JobApp />}>
            <Route path="job-opening" element={<JopOpening />} />
          </Route>

          {/*--------- Nexted Route --------*/}
          <Route path="settings" element={<Settings />}>
            <Route path="user" element={<InviteTM />} />
            <Route path="location" element={<AddComapnyLocation />} />
            <Route path="jobposting" element={<JopPosting />} />
            <Route path="careerspage" element={<CareersPage />} />
          </Route>
        </Route>
      </Route>

      {/* Redirect unknown routes to Login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </>
  )
);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
