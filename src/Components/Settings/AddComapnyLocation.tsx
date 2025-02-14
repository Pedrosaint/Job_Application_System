import React, { useState } from "react";
import CountrySelect from "../../Common/CountrySelect";


const AddCompanyLocation: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  return (
    <div className="flex mt-6">
      {/* Form Container */}
      <div className="bg-white rounded-sm shadow-md p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2 text-gray-600">
          Add New Location
        </h2>

        <form className="space-y-1">
          {/* Location Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Location Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Headquarter"
              className="w-full px-3 py-1.5 border rounded-sm outline-none border-gray-300"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-1.5 border rounded-sm outline-none border-gray-300"
            />
          </div>

          {/* City & State */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                City <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-1.5 border rounded-sm outline-none border-gray-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                State <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-1.5 border rounded-sm outline-none border-gray-300"
              />
            </div>
          </div>

          {/* Country & Postal Code */}
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div>
              <CountrySelect onChange={setSelectedCountry} />
              {selectedCountry && (
                <p className="mt-3">Selected Country: {selectedCountry}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Postal Code <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-1.5 border rounded-sm outline-none border-gray-300"
              />
            </div>
          </div>

          {/* Add Location Button */}
          <div className="flex justify-start">
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-sm outline-none text-sm font-semibold font-mono">
              ADD LOCATION
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCompanyLocation;
