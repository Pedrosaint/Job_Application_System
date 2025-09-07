import React from "react";

const AccountComp = () => {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className=" bg-gray-300 w-10 h-10 rounded-full text-center items-center justify-center flex font-bold ">
          E
        </div>
        <p className="text-xl font-medium ">enudeme chukwuka</p>
      </div>

      <div className="flex flex-col justify-between   text-center  h-[400px] py-2 ">
        <div className=" mt-3  ">
          <div className="text-gray-700 font-semibold mt-2 flex  justify-between">
            <h1 className=" font-bold ">Phone number :</h1>
            <p>+234123456789</p>
          </div>
          <div className="text-gray-700 font-semibold mt-2 flex   justify-between ">
            <h1 className="font-bold ">Email :</h1>
            <p className="text-[15px]  ">Chukwu***@gmail.com</p>
          </div>
          <div className="text-gray-700 font-semibold mt-2 flex   justify-between ">
            <h1 className="font-bold ">Password:</h1>
            <p className="text-[15px]  ">*****</p>
          </div>
        </div>
        <div>
          <button className=" px-4 py-2 bg-red-500 text-white rounded-full text-base hover:bg-red-600 hover:cursor-pointer ">
            Delete My Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountComp;
