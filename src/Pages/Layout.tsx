// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import Header from "../Common/Header"; // Import the Header
// import { Outlet } from "react-router-dom";
// import { onAuthStateChanged, User } from "firebase/auth";
// // import { auth } from "../Firebase/Firebase";

// const Layout: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // State for mobile sidebar

//   useEffect(() => {
//     // Listen for changes in authentication state
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser); // Set the logged-in user
//     });

//     // Clean up the listener on component unmount
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       {user && (
//         <Sidebar
//           user={{
//             name: user.displayName || "User",
//             email:user.email || "User",
//             profilePicture: user.photoURL || "",
//           }}
//           isMobileSidebarOpen={isMobileSidebarOpen}
//           setIsMobileSidebarOpen={setIsMobileSidebarOpen}
//         />
//       )}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Sticky Header */}
//         <Header
//           setIsMobileSidebarOpen={setIsMobileSidebarOpen}
//           isSidebarCollapsed={true}
//         />

//         {/* Main Content */}
//         <main className="flex-1 p-6 bg-[#d8caca75] overflow-y-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;

// // import React, { useState } from 'react'

// // const Layout: React.FC = () => {
// //   const [count, setCount] = useState(0);
// //   return (
// //     <div>
// //       <p>Count= {count}</p>
// //       <button onClick={() => setCount(count + 1) }>Increase</button>
// //     </div>
// //   )
// // }

// // export default Layout







import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "../Common/Header";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Layout: React.FC = () => {
  const { currentUser } = useAuth(); // ✅ pull user from context
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {currentUser && (
        <Sidebar
          user={{
            name: currentUser.fullName || "User",
            email: currentUser.email || "User",
            profilePicture: "", // You can extend AuthUser later if you want profile pictures
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
          isSidebarCollapsed={true}
        />

        {/* Page Content */}
        <main className="flex-1 p-6 bg-[#d8caca75] overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
