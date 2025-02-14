import React from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const roles = ["Recruiter", "HR Manager", "Admin", "Front Desk Officer"];

const InviteTM: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  return (
    <div className="mt-6">
      {/* Main Layout - Grid Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Team Members Table (Takes Full Width on Large Screens) */}
        <div className="bg-white shadow-md rounded-md p-5 lg:col-span-2 h-auto self-start">
          <h2 className="text-2xl font-semibold mb-7 text-gray-500">
            Team Members
          </h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-50">
                <th className="p-3 text-gray-700">USER DETAILS</th>
                <th className="text-left p-3 text-gray-700">ROLE</th>
                <th className="text-end p-3 text-gray-700">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t bg-[#e0dfdf] ml-9">
                <td className="p-3 flex items-center space-x-3">
                  <div className="w-10 h-10 hidden bg-gray-300 rounded-full lg:flex items-center justify-center text-lg font-bold">
                    RD
                  </div>
                  <div className="">
                    <p className="font-semibold">Robert Downey</p>
                    <p className="text-gray-500 text-sm">john@uber.com</p>
                    <p className="text-gray-500 text-sm">Administrator</p>
                  </div>
                </td>
                <td className="p-3 text-gray-700">[Admin]</td>
                <td className="p-3 text-gray-700"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Side: Invite Teammate Form */}
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-2xl font-semibold mb-7 text-gray-500">
            Invite Your Teammate
          </h2>
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-3">
              <label htmlFor="">
                <span className="block text-sm font-medium mb-1 text-gray-700">
                  First Name
                </span>
                <input
                  type="text"
                  placeholder=""
                  className="border border-gray-300 p-2 rounded-sm w-full outline-none"
                />
              </label>
              <label htmlFor="">
                <span className="block text-sm font-medium mb-1 text-gray-700">
                  Last Name
                </span>
                <input
                  type="text"
                  placeholder=""
                  className="border border-gray-300 p-2 rounded-sm w-full outline-none"
                />
              </label>
            </div>
            <label htmlFor="">
              <span className="block text-sm font-medium mb-1 text-gray-700">
                Designation
              </span>
              <input
                type="text"
                placeholder="(e.g. Hiring Manager)"
                className="border border-gray-300 p-2 rounded-sm w-full outline-none"
              />
            </label>
            <label htmlFor="">
              <span className="block text-sm font-medium mb-1 text-gray-700">
                Email Address
              </span>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="border border-gray-300 p-2 rounded-sm w-full outline-none"
              />
            </label>
            <label htmlFor="">
              <span className="block text-sm font-medium mb-1 text-gray-700">
                Select Role
              </span>
              <Listbox value={selectedRole} onChange={setSelectedRole}>
                <div className="relative">
                  <ListboxButton className="border border-gray-300 p-2 rounded-sm w-full outline-none bg-white text-left">
                    {selectedRole}
                  </ListboxButton>
                  <ListboxOptions className="absolute w-full mt-2 bg-gray-100 shadow-md rounded-md overflow-hidden">
                    {roles.map((role, index) => (
                      <ListboxOption
                        key={index}
                        value={role}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                      >
                        {role}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </label>
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-2 w-fit text-sm"
            >
              INVITE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InviteTM;
