import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io"; // Import Icon


const Department: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("--Select--");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const department = [
    "default",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="flex  justify-between font-medium text-gray-700 items-center gap-1 whitespace-nowrap">
        Department <span className="text-gray-500"></span>
        <button className="text-blue-500 text-sm font-semibold">Add New</button>
      </label>

      {/* Selected Option Box */}
      <div
        className="w-full border border-gray-300 px-3 py-2 mt-1 rounded outline-none cursor-pointer bg-white relative flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedType}
        <IoIosArrowDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute top-3 left-0 w-full bg-white border border-gray-300 rounded shadow-lg z-50 max-h-60 overflow-auto animate-fadeIn">
          {department.map((option, index) => (
            <li
              key={index}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedType(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Department;
