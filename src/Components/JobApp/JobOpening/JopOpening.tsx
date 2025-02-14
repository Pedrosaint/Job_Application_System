import React, { useState } from "react";
import { VscTools } from "react-icons/vsc";
import { PiTelegramLogo } from "react-icons/pi";
import { SlBriefcase } from "react-icons/sl";
import { GoStop } from "react-icons/go";
import RemoteJobToggle from "./RemoteJobToggle";
import { useNavigate } from "react-router-dom";
import ExperienceDropdown from "./ExperienceRequired";
import Employmenttype from "./Employmenttype";
import Department from "./Department";
import JobIndustry from "./JobIndustry";
import Screening from "./Screening";

const JobOpening: React.FC = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const navigate = useNavigate();
  const handleNewLocation = () => {
    navigate("/settings/location");
  };

  return (
    <>
      {/* Tabs */}
      <div className="flex w-full border-b border-gray-400 mt-4 max-w-4xl">
        <button
          className={`flex-1 py-3 text-center flex items-center justify-center gap-2 text-sm font-semibold ${
            activeTab === "basic"
              ? "bg-gray-200 border-b-2 border-blue-500 text-gray-800"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("basic")}
        >
          <span>
            <SlBriefcase size={20} />
          </span>{" "}
          BASIC INFO
        </button>
        <button
          className={`flex-1 py-3 text-center flex items-center justify-center gap-2 text-sm font-semibold ${
            activeTab === "options"
              ? "bg-gray-200 border-b-2 border-blue-400 text-gray-800"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("options")}
        >
          <span>
            <VscTools size={20} />
          </span>{" "}
          OPTIONS
        </button>
        <button
          className={`flex-1 py-3 text-center flex items-center justify-center gap-2 text-sm font-semibold ${
            activeTab === "broadcast"
              ? "bg-gray-200 border-b-2 border-blue-400 text-gray-800"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("broadcast")}
        >
          <span>
            <PiTelegramLogo size={20} />
          </span>{" "}
          BROADCAST
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6 lg:p-12 bg-white shadow-md rounded-sm mt-4 w-full max-w-4xl">
        {/*---------------- Basic ----------------*/}
        {activeTab === "basic" && (
          <>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label className="block font-medium text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="Eg: PHP Developer"
                  className="w-full border border-gray-300 px-3 py-2 mt-1 rounded outline-none"
                />
              </div>
              <div>
                <label className="flex font-medium text-gray-700 items-center gap-1 whitespace-nowrap">
                  Job Code{" "}
                  <span className="text-gray-500">
                    <GoStop size={15} />
                  </span>
                </label>
                <input
                  type="text"
                  value="UB101"
                  className="w-full border border-gray-300 px-2 py-2 mt-1 rounded outline-none"
                  readOnly
                />
              </div>
            </div>

            <label className="block mt-4 font-medium text-gray-700">
              Job Description{" "}
              <span className="text-gray-500 text-sm">
                (responsibilities, required skills, perks, etc.)
              </span>
            </label>
            <textarea
              className="w-full px-3 py-2 mt-1 rounded h-32 outline-none border border-gray-300 bg-[#f1efef]"
              defaultValue={`Job Brief :\n\n\nResponsibilities :\n\n\nSkills Required :`}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setActiveTab("options")}
                className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-2 text-sm rounded-sm"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/*---------------- Option ----------------*/}
        {activeTab === "options" && (
          <div>
            <div className="flex items-center justify-between space-x-8 w-full">
              {/* Left Side - Location Label, Refresh, Input */}
              <div className="w-full">
                {/* Label & Refresh Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <label className="font-medium text-purple-700">
                      Location
                    </label>
                  </div>
                  <button
                    onClick={handleNewLocation}
                    className="text-blue-500 text-sm font-semibold"
                  >
                    Add New
                  </button>
                </div>

                {/* Input Field (Dropdown) */}
                <select className="w-full border border-gray-300 px-3 py-2 mt-2 rounded outline-none">
                  <option>Uber Headquarters (San Francisco, CA - USA)</option>
                </select>
              </div>

              {/* Right Side - Remote Job Toggle */}
              <div className="items-center space-x-2">
                <div className="text-gray-700 font-medium whitespace-nowrap">
                  Remote Job?
                </div>
                <RemoteJobToggle />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20">
              <ExperienceDropdown />
              <Employmenttype />
              <Department />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20">
             <Screening />
             <JobIndustry />
            </div>

            <div className="mt-7 flex justify-between">
              <div className="">
                <button
                  onClick={() => setActiveTab("basic")}
                  className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-2 text-sm rounded-sm"
                >
                  Previous
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => setActiveTab("broadcast")}
                  className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-2 text-sm rounded-sm"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/*---------------- Broadcast ----------------*/}
        {activeTab === "broadcast" && (
          <div>
            <h2 className="text-lg font-semibold">Broadcast Job</h2>
            <p className="text-gray-600">Share job posting with candidates.</p>
            <div className="flex justify-end mt-4">
              <button
                //   onClick={}
                className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-2 text-sm rounded-sm"
              >
                Finish
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JobOpening;
