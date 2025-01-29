import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "../Common/Header"; // Import the Header
import { Outlet } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

const Layout: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // State for mobile sidebar

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the logged-in user
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {user && (
        <Sidebar
          user={{
            name: user.displayName || "User",
            profilePicture: user.photoURL || "",
          }}
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Sticky Header */}
        <Header
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          isSidebarCollapsed
        />

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
