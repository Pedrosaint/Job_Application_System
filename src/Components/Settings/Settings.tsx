import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";

const Settings: React.FC = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  // Check if the current path is exactly "/settings"
  const isOnlySettings = location.pathname ===  "/settings";

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="bg-blue-500 p-2 text-white text-md font-semibold indent-5 font-serif">
        {!isOnlySettings && ( // Hide "Dashboard" if on /settings
          <Link to="/" className="text-gray-200 hover:underline">
            Dashboard
          </Link>
        )}
        {pathParts.includes("settings") && (
          <>
            {!isOnlySettings && " / "}
            <Link to="/settings" className="text-gray-200 hover:underline">
              Settings
            </Link>
          </>
        )}
        {pathParts.length > 1 && (
          <span className="capitalize">
            {" "}
            / {pathParts[pathParts.length - 1]}
          </span>
        )}
      </div>

      {/* Nested Routes */}
      <Outlet />
    </div>
  );
};

export default Settings;
