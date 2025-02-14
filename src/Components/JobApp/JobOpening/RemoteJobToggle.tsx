import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const RemoteJobToggle: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div
      className={`w-14 h-7 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
        isOn ? "bg-green-500" : "bg-gray-400"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      {/* Toggle Circle */}
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${
          isOn ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {isOn ? (
          <IoMdCheckmark size={14} color="green" className="animate-fade-in" />
        ) : (
          <RxCross2 size={14} color="gray" className="animate-fade-in" />
        )}
      </div>
    </div>
  );
};

export default RemoteJobToggle;
