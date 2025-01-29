// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { RxDashboard } from "react-icons/rx";
// import { IoBriefcaseSharp } from "react-icons/io5";
// import { FiSettings } from "react-icons/fi";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";


// interface SidebarProps {
//   user: {
//     name: string;
//     profilePicture?: string;
//   };
// }

// const SIDEBAR_ITEMS = [
//   {
//     path: "/",
//     label: "Dashboard",
//     icon: <RxDashboard size={25} />,
//   },
//   {
//     path: "/job",
//     label: "Job Applications",
//     icon: <IoBriefcaseSharp size={25} />,
//   },
//   {
//     path: "/settings",
//     label: "Settings",
//     icon: <FiSettings size={25} />,
//   },
// ];

// const Sidebar: React.FC<SidebarProps> = ({ user }) => {
//   console.log("User Data:", user);

//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const getInitials = (name: string) => {
//     return name
//       .split(" ")
//       .map((word) => word.charAt(0).toUpperCase())
//       .join("");
//   };

//   return (
//     <div
//       className={`h-screen relative hidden md:block z-10${
//         isCollapsed ? "w-20" : "w-64"
//       } bg-white text-black flex flex-col transition-all duration-300`}
//     >
//       {/* Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         className="absolute top-20 transform -translate-y-1/2 right-[-12px] bg-gray-300 rounded-full p-1 shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300"
//       >
//         {isCollapsed ? (
//           <HiChevronRight size={20} />
//         ) : (
//           <HiChevronLeft size={20} />
//         )}
//       </button>

//       {/* Profile Section */}
//       <div className="flex items-center p-4 border-b border-gray-300 h-20">
//         {user.profilePicture ? (
//           <img
//             src={user.profilePicture}
//             alt="Profile"
//             className="rounded-full h-10 w-10"
//             onError={(e) => {
//               (e.target as HTMLImageElement).src = "";
//             }}
//           />
//         ) : (
//           <div className="h-10 w-10 flex items-center justify-center bg-gray-700 text-white rounded-full">
//             {getInitials(user.name)}
//           </div>
//         )}
//         {!isCollapsed && (
//           <div className="ml-4 whitespace-nowrap">
//             <h3 className="text-lg font-semibold">{user.name}</h3>
//             <p className="text-sm text-black">Logged in</p>
//           </div>
//         )}
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex flex-col mt-5">
//         {SIDEBAR_ITEMS.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             className={({ isActive }) =>
//               `p-3 text-sm flex items-center hover:bg-gray-300 whitespace-nowrap ${
//                 isActive ? "bg-gray-300 font-bold text-gray-600" : ""
//               }`
//             }
//           >
//             <div className="ml-3">{item.icon}</div>
//             {!isCollapsed && <span className="ml-4">{item.label}</span>}
//           </NavLink>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;




import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoBriefcaseSharp } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface SidebarProps {
  user: {
    name: string;
    profilePicture?: string;
  };
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SIDEBAR_ITEMS = [
  { path: "/", label: "Dashboard", icon: <RxDashboard size={25} /> },
  {
    path: "/job",
    label: "Job Applications",
    icon: <IoBriefcaseSharp size={25} />,
  },
  { path: "/settings", label: "Settings", icon: <FiSettings size={25} /> },
];

const Sidebar: React.FC<SidebarProps> = ({
  user,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}) => {
  console.log("User Data:", user);

  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggle sidebar for larger screens
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    console.log("Sidebar Collapsed:", !isCollapsed);
  };

  // Close mobile sidebar when clicking outside
  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
    console.log("Mobile Sidebar Closed");
  };

  // Get user initials
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");

  return (
    <>
      {/* Sidebar for Large Screens */}
      <div
        className={`hidden md:flex h-screen relative ${
          isCollapsed ? "w-20" : "w-64"
        } bg-white text-black flex-col transition-all duration-300`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-20 transform -translate-y-1/2 right-[-12px] bg-gray-300 rounded-full p-1 shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          {isCollapsed ? (
            <HiChevronRight size={20} />
          ) : (
            <HiChevronLeft size={20} />
          )}
        </button>

        {/* Profile Section */}
        <div className="flex items-center p-4 border-b border-gray-300 h-20">
          {user.profilePicture ? (
            <img
              src={user.profilePicture}
              alt="Profile"
              className="rounded-full h-10 w-10"
              onError={(e) => ((e.target as HTMLImageElement).src = "")}
            />
          ) : (
            <div className="h-10 w-10 flex items-center justify-center bg-gray-700 text-white rounded-full">
              {getInitials(user.name)}
            </div>
          )}
          {!isCollapsed && (
            <div className="ml-4 whitespace-nowrap">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-sm text-black">Logged in</p>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col mt-5">
          {SIDEBAR_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `p-3 text-sm flex items-center hover:bg-gray-300 whitespace-nowrap ${
                  isActive ? "bg-gray-300 font-bold text-gray-600" : ""
                }`
              }
            >
              <div className="ml-3">{item.icon}</div>
              {!isCollapsed && <span className="ml-4">{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/*------------------------- Mobile Sidebar (Small Screens)---------------------------*/}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-50 md:hidden"
          onClick={closeMobileSidebar}
        >
          <div
            className="h-screen w-64 bg-white text-black flex flex-col absolute left-0 top-0 shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={closeMobileSidebar}
              className="absolute top-20 transform -translate-y-1/2 right-[-12px] bg-gray-300 rounded-full p-1 shadow-md"
            >
              <HiChevronLeft size={20} />
            </button>

            {/* Profile Section */}
            <div className="flex items-center p-4 border-b border-gray-300 h-20">
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="rounded-full h-10 w-10"
                  onError={(e) => ((e.target as HTMLImageElement).src = "")}
                />
              ) : (
                <div className="h-10 w-10 flex items-center justify-center bg-gray-700 text-white rounded-full">
                  {getInitials(user.name)}
                </div>
              )}
              <div className="ml-4 whitespace-nowrap">
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-sm text-black">Logged in</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col mt-5">
              {SIDEBAR_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `p-3 text-sm flex items-center hover:bg-gray-300 whitespace-nowrap ${
                      isActive ? "bg-gray-300 font-bold text-gray-600" : ""
                    }`
                  }
                  onClick={closeMobileSidebar} // Close sidebar on link click
                >
                  <div className="ml-3">{item.icon}</div>
                  <span className="ml-4">{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
