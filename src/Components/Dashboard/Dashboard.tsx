// import React, {useEffect} from "react";
// import { IoMdPerson } from "react-icons/io";
// import { FaBriefcase } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Dashboard: React.FC = () => {
//   const navigate = useNavigate()

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     console.log("Dashboard mounted");
//   }, []);

//   const handleTeammates = () => {
//     navigate("/settings/user")
//   }

//   const handleCompanyLocation = () => {
//     navigate("/settings/location")
//   }
  
//   const handleJobPosting = () => {
//     navigate("/settings/jobposting")
//   }

//   const handleCareersPage = () => {
//     navigate("/settings/careerspage")
//   }

//   return (
//     <div className="">
//       {/* Stats Overview Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//         {/* Job Openings (1 column) */}
//         <div className="bg-white p-5 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
//             <span className="font-medium">Job Openings</span>
//             <button className="bg-blue-500 text-white px-4 py-2 text-sm rounded">
//               ADD JOB OPENING
//             </button>
//           </div>
//           <div className="flex justify-between mt-4 text-gray-600">
//             <span className="flex flex-col items-center">
//               <div className="flex items-center">
//                 <FaBriefcase color="gray" />
//                 <span className="ml-1 text-blue-600">0</span>
//               </div>
//               Published
//             </span>
//             <span className="flex flex-col items-center">
//               <div className="flex items-center">
//                 <FaBriefcase color="gray" />
//                 <span className="ml-1 text-blue-600">0</span>
//               </div>
//               Internal
//             </span>
//             <span className="flex flex-col items-center">
//               <div className="flex items-center">
//                 <FaBriefcase color="gray" />
//                 <span className="ml-1 text-blue-600">0</span>
//               </div>
//               Unpublished
//             </span>
//           </div>
//         </div>

//         {/* Total Applications (spanning 2 columns) */}
//         <div className="bg-white p-5 rounded-lg shadow-lg md:col-span-2">
//           <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
//             <span className="font-medium">Total Applications - 0</span>
//             <button className="bg-blue-500 text-white px-4 py-2 text-sm rounded">
//               ADD APPLICANT
//             </button>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4 text-gray-600">
//             <span className="flex flex-col items-center">
//               <div className="flex items-center">
//                 <IoMdPerson color="gray" />
//                 <span className="ml-1 text-blue-600">0</span>
//               </div>
//               New
//             </span>
//             <span className="flex flex-col items-center">
//               <div className="flex items-center">
//                 <IoMdPerson color="gray" />
//                 <span className="ml-1 text-blue-600">0</span>
//               </div>
//               Shortlisted
//             </span>
//             <span className="flex flex-col items-center">
//               <div className="flex items-center">
//                 <IoMdPerson color="gray" />
//                 <span className="ml-1 text-blue-600">0</span>
//               </div>
//               Interview
//             </span>
//             <span className="flex flex-col items-center">
//               <div className="flex items-center">
//                 <IoMdPerson color="gray" />
//                 <span className="ml-1 text-blue-600">0</span>
//               </div>
//               Offered
//             </span>
//             <span className="flex flex-col items-center">
//               <div className="flex items-center">
//                 <IoMdPerson color="gray" />
//                 <span className="ml-1 text-blue-600">0</span>
//               </div>
//               Hired
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* -------------------------------Under Dashboard------------------------- */}
//       {/* Graph and Panels */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Jobs Performance */}
//         <div className="bg-white p-5 rounded-lg shadow-lg w-full">
//           <h2 className="text-lg font-medium border-b-2 border-gray-200 pb-2 mb-3 whitespace-nowrap">
//             Jobs Performance Last Week
//           </h2>
//           <div className="h-40 flex items-center justify-center text-gray-400">
//             (Graph Placeholder)
//           </div>
//         </div>

//         {/* Upcoming Interviews */}
//         <div className="bg-white p-5 rounded-lg shadow-lg w-full">
//           <h2 className="text-lg font-medium border-b-2 border-gray-200 pb-2 mb-3">
//             Upcoming Interviews
//           </h2>
//           <p className="text-gray-500">No upcoming interviews</p>
//         </div>

//         {/* Setup Your Account */}
//         <div className="bg-white p-5 rounded-lg shadow-lg w-full">
//           <h2 className="text-lg font-medium border-b-2 border-gray-200 pb-2 mb-3">
//             Setup Your Account
//           </h2>
//           <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
//             <div
//               className="bg-green-500 h-2 rounded-full"
//               style={{ width: "50%" }}
//             ></div>
//           </div>
//           <ul className="text-gray-600 text-sm space-y-1">
//               <li>
//                 <button className="hover:text-blue-500">
//                   ✔ Email Confirmed
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={handleTeammates}
//                   className="hover:text-blue-500 hover:underline">
//                   + Invite Teammates
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={handleCompanyLocation}
//                   className="hover:text-blue-500 hover:underline">
//                   + Add Company Location
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={handleJobPosting}
//                   className="hover:text-blue-500 hover:underline">
//                   + Post a Job
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={handleCareersPage}
//                   className="hover:text-blue-500 hover:underline">
//                   + Build Career Page
//                 </button>
//               </li>
//             </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
   const scrollToTop = () => {
     window.scrollTo(0, 0);
   };

  // Array of navigation buttons
  const setupSteps = [
    { label: "✔ Email Confirmed", path: null }, // No navigation for this
    { label: "+ Invite Teammates", path: "/settings/user" },
    { label: "+ Add Company Location", path: "/settings/location" },
    { label: "+ Post a Job", path: "/settings/jobposting" },
    { label: "+ Build Career Page", path: "/settings/careerspage" },
  ];

  return (
    <div className="">
      {/* Stats Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Job Openings */}
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
            <span className="font-medium">Job Openings</span>
            <button className="bg-blue-500 text-white px-4 py-2 text-sm rounded">
              ADD JOB OPENING
            </button>
          </div>
          <div className="flex justify-between mt-4 text-gray-600">
            {["Published", "Internal", "Unpublished"].map((status, index) => (
              <span key={index} className="flex flex-col items-center">
                <div className="flex items-center">
                  <FaBriefcase color="gray" />
                  <span className="ml-1 text-blue-600">0</span>
                </div>
                {status}
              </span>
            ))}
          </div>
        </div>

        {/* Total Applications */}
        <div className="bg-white p-5 rounded-lg shadow-lg md:col-span-2">
          <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
            <span className="font-medium">Total Applications - 0</span>
            <button className="bg-blue-500 text-white px-4 py-2 text-sm rounded">
              ADD APPLICANT
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4 text-gray-600">
            {["New", "Shortlisted", "Interview", "Offered", "Hired"].map(
              (status, index) => (
                <span key={index} className="flex flex-col items-center">
                  <div className="flex items-center">
                    <IoMdPerson color="gray" />
                    <span className="ml-1 text-blue-600">0</span>
                  </div>
                  {status}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Under Dashboard - Graph and Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Jobs Performance */}
        <div className="bg-white p-5 rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-medium border-b-2 border-gray-200 pb-2 mb-3">
            Jobs Performance Last Week
          </h2>
          <div className="h-40 flex items-center justify-center text-gray-400">
            (Graph Placeholder)
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white p-5 rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-medium border-b-2 border-gray-200 pb-2 mb-3">
            Upcoming Interviews
          </h2>
          <p className="text-gray-500">No upcoming interviews</p>
        </div>

        {/* Setup Your Account */}
        <div className="bg-white p-5 rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-medium border-b-2 border-gray-200 pb-2 mb-3">
            Setup Your Account
          </h2>
          <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
            <div className="relative w-full bg-gray-300 h-4 rounded-full">
              <div
                className="bg-green-500 h-full rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ width: "50%" }}
              >
                50%
              </div>
            </div>
          </div>
          <ul className="text-gray-600 text-sm space-y-1">
            {setupSteps.map((link, index) => (
              <li key={index}>
                {link.path ? (
                  <Link
                    to={link.path}
                    className="block hover:text-blue-500 hover:underline"
                    onClick={scrollToTop} // Ensures scrolling to top on click
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span className="text-gray-500">{link.label}</span> // Non-clickable
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
