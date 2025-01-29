import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { RiShareBoxFill } from "react-icons/ri";

interface HeaderProps {
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSidebarCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ setIsMobileSidebarOpen, isSidebarCollapsed }) => {
  return (
    <>
      <div
        className={`sticky top-0 left-0 right-0 h-16 flex items-center justify-between bg-white bg-opacity-50 backdrop-blur-md shadow-lg px-4 md:px-6 z-40 ${
          isSidebarCollapsed ? "pl-20" : "pl-64"
        }`}
      >
        {/* Left Section: Logo & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          {/* Mobile Sidebar Toggle Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileSidebarOpen(true)}
          >
            <HiMenu size={24} />
          </button>
          <h2 className="text-lg font-semibold whitespace-nowrap hidden lg:block">
            Boundless Solopreneur, LLC
          </h2>
        </div>

        {/* Center Section: Search Bar (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-80 lg:w-96">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search Applicants..."
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>

        {/* Right Section: Actions & Notifications */}
        <div className="flex items-center gap-3 md:gap-4">
          <button className="bg-black flex text-white px-3 md:px-4 py-2 rounded-md text-sm capitalize font-mono">
            <RiShareBoxFill size={20} />
            <div className="ml-2"> View Career Page</div>
          </button>
          <button className="bg-gray-600 text-white px-3 md:px-4 py-2 rounded-md text-sm">
            + New
          </button>
          <IoNotificationsOutline
            size={24}
            className="text-gray-600 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
