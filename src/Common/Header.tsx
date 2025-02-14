import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { RiShareBoxFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { SlBriefcase, SlCalender } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";

interface HeaderProps {
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({
  setIsMobileSidebarOpen,
  isSidebarCollapsed,
}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="sticky top-0 left-0 right-0 h-16 flex items-center justify-between 
      bg-white bg-opacity-50 backdrop-blur-md shadow-lg px-4 md:px-6 z-40 
      transition-all duration-300"
    >
      {/* Left Section: Mobile Menu Button & Company Name */}
      <div className="flex items-center gap-3 flex-[2] justify-start">
        {/* Mobile Sidebar Toggle Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          <HiMenu size={24} />
        </button>
        {/* Company Name */}
        <h2 className="text-lg font-semibold hidden md:block text-ellipsis whitespace-nowrap">
          Boundless Solopreneur, LLC
        </h2>
      </div>

      {/* Center Section: Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-72 lg:w-full  flex-[1]">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search Applicants..."
          className="bg-transparent outline-none ml-2 w-full text-sm"
        />
      </div>

      {/* Right Section: Actions & Notifications */}
      <div className="flex items-center gap-3 md:gap-4  lg:flex-[2] justify-end">
        <button className="flex items-center bg-black text-white px-3 md:px-4 py-2 rounded-md text-sm font-medium">
          <RiShareBoxFill size={20} />
          <span className="ml-2 hidden sm:block">View Career Page</span>
        </button>

        <button
          className="flex items-center bg-[#150d51] text-white px-3 md:px-4 py-2 rounded-md text-sm font-medium relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(true)}
        >
          <IoMdAdd size={20} />
          <span className="ml-2 hidden sm:block">New</span>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div
            className="absolute mt-52 w-48 bg-white border border-gray-100 rounded-md shadow-lg"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <ul className="">
              <li>
                <Link
                  to="/job/job-opening"
                  className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-[#150d51] hover:rounded-t-md"
                >
                  <div className="flex">
                    <SlBriefcase  size={20} color="gray"/>
                    <span className="ml-2">Job Opening</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/applicant"
                  className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-[#150d51]"
                >
                  <div className="flex">
                    <IoPersonOutline size={20} color="gray"/>
                    <span className="ml-2">Applicant</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/interview"
                  className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-[#150d51] hover:rounded-b-md"
                >
                  <div className="flex">
                    <SlCalender size={20} color="gray" />
                    <span className="ml-2">Interview</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}

        <IoNotificationsOutline
          size={24}
          className="text-gray-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
