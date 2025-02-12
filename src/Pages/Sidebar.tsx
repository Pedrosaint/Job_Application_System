import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoBriefcaseSharp } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import ThemeToggle from "../Common/ThemeToggle";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import ProfileModal from "../Helper/ProfileModal";
import { motion } from "framer-motion";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

interface SidebarProps {
  user: {
    name: string;
    email: string;
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => { setIsCollapsed(!isCollapsed); console.log("Sidebar Collapsed:", !isCollapsed)}
  const closeMobileSidebar = () => { setIsMobileSidebarOpen(false); console.log("Mobile Sidebar Closed"); };

  //Get your initials
  const getInitials = (name: string) => {
    return name 
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
  }
  return (
    <>
      {/*------------------------ Sidebar for Large Screens --------------------*/}
      <motion.div
        animate={{ width: isCollapsed ? 60 : 230 }}
        className="hidden md:flex h-screen relative bg-white text-black flex-col shadow-lg transition-all"
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-20 transform -translate-y-1/2 right-[-12px] bg-gray-300 rounded-full p-0.5 shadow-md opacity-0 hover:opacity-100 transition-opacity  duration-300"
        >
          {isCollapsed ? (
            <HiChevronRight size={20} />
          ) : (
            <HiChevronLeft size={20} />
          )}
        </button>

        {/*--------------- Profile Section ----------------*/}
        <div
          className="flex items-center border-b-2 border-gray-200 h-20 cursor-pointer mx-2"
          onClick={() => setIsModalOpen(true)}
        >
          {user.profilePicture ? (
            <img
              src={user.profilePicture}
              alt="Profile"
              className="rounded-full h-10 w-10"
            />
          ) : (
            <div className="h-10 w-10 min-w-[40px] min-h-[40px] flex items-center justify-center bg-gray-400 text-white text-2xl rounded-full">
              {user.name.charAt(0)}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isCollapsed ? 0 : 1, x: isCollapsed ? -20 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {!isCollapsed && (
              <h3 className="text-lg font-semibold ml-4">Profile</h3>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isCollapsed ? 0 : 1, x: isCollapsed ? 20 : 0 }}
            transition={{ duration: 0.5 }}
            className="ml-20"
          >
            <MdOutlineArrowDropDownCircle size={20} />
          </motion.div>
        </div>

        <ProfileModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          user={user}
        />

        {/*------------------ Navigation Links ------------------*/}
        <nav className="flex flex-col mt-5">
          {SIDEBAR_ITEMS.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{
                    scale: [1, 0.9, 1],
                    transition: {
                      duration: 0.9,
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  }}
                  className={`p-3 m-1 text-sm flex items-center rounded-md hover:bg-gray-100 whitespace-nowrap ${
                    isActive ? "bg-gray-200 font-bold text-blue-600" : ""
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 w-1 rounded-full h-7 m-1"
                      style={{ backgroundColor: "#3B82F6" }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    />
                  )}
                  <div className=" text-gray-500">{item.icon}</div>
                  {isCollapsed ? null : (
                    <motion.span
                      initial={{ opacity: 0, x: -11 }}
                      animate={{ opacity: 2, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="ml-4"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </nav>
      </motion.div>

      {/*-------------------- Mobile Sidebar -------------------*/}
      {isMobileSidebarOpen && (
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-opacity-50 z-50 md:hidden"
          onClick={closeMobileSidebar}
        >
          <motion.div
            className="h-screen w-64 bg-white dark:bg-gray-900 text-black flex flex-col absolute left-0 top-0 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeMobileSidebar}
              className="absolute top-20 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity  duration-300 right-[-12px] bg-gray-300 rounded-full p-1 shadow-md"
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
              <div className="">
                <h3 className="text-lg font-semibold ml-4">Profile</h3>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col mt-5">
              {SIDEBAR_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `p-3 text-sm flex items-center hover:bg-gray-200 whitespace-nowrap ${
                      isActive ? "bg-gray-200 font-bold text-blue-600" : ""
                    }`
                  }
                  onClick={closeMobileSidebar}
                >
                  <div className="ml-3">{item.icon}</div>
                  <span className="ml-4">{item.label}</span>
                </NavLink>
              ))}
            </nav>
            <div className="bg-blue-600 rounded-md flex justify-evenly p-3 m-3">
              <span className="font-mono font-medium text-sm text-white">
                Dark/Light Mode
              </span>
              <ThemeToggle />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Sidebar;
