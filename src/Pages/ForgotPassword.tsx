// import React from "react";
// import { toast } from "react-toastify";
// import { auth } from "../Firebase/Firebase"; // Ensure 'auth' is imported
// import { sendPasswordResetEmail } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";

// const ForgotPassword: React.FC = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const emailValue = formData.get("email") as string;

//     try {
//       await sendPasswordResetEmail(auth, emailValue);
//       toast.success("Check your email to reset your password.", {
//         position: "top-center",
//       });
//       navigate("/Login"); // Redirect to login page
//     } catch (error) {
//       console.error((error as Error).message);
//       toast.error("Error sending reset email. Please try again.", {
//         position: "top-center",
//       });
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Section */}
//       <div className="hidden w-1/2 bg-gray-900 lg:flex flex-col justify-center items-center text-center text-white p-8 h-full">
//         <div className="mb-6">
//           <h1 className="text-4xl font-bold"></h1>
//           <p className="mt-2 text-lg font-light"></p>
//         </div>
//         <p className="text-5xl font-bold font-serif text-center text-[#10e07888]">
//           <Typewriter
//             words={["Welcome to our Job Application System."]}
//             loop={Infinity}
//             typeSpeed={80}
//             deleteSpeed={50}
//             delaySpeed={1000}
//           />
//         </p>
//       </div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white lg:p-10">
//         <div className="bg-white p-6 rounded-lg shadow-2xl w-80">
//           <h1 className="text-center text-2xl font-bold text-black">
//             Forgot Password
//           </h1>
//           <h3 className="text-center text-xl font-medium mb-4 text-gray-400">
//             Reset Password!
//           </h3>
//           <form onSubmit={handleSubmit} className="flex flex-col mt-6 form">
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder=""
//               required
//               className="border p-2 rounded-md"
//             />
//             <label htmlFor="email" className="block text-sm font-medium mb-1">
//               Email address*
//             </label>
//             <button
//               type="submit"
//               className="bg-green-500 text-white py-2 px-4 rounded-sm hover:bg-green-600 mt-6 mb-6"
//             >
//               Reset Password
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;




import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const emailValue = formData.get("email") as string;

    try {
      // ✅ Fake password reset flow
      // In real-world (non-Firebase), you'd call your backend API here
      if (!emailValue) {
        throw new Error("Email is required");
      }

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(`Password reset link sent to ${emailValue}`, {
        position: "top-center",
      });

      navigate("/Login"); // Redirect to login page
    } catch (error) {
      console.error((error as Error).message);
      toast.error("Error sending reset email. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="hidden w-1/2 bg-gray-900 lg:flex flex-col justify-center items-center text-center text-white p-8 h-full">
        <div className="mb-6">
          <h1 className="text-4xl font-bold"></h1>
          <p className="mt-2 text-lg font-light"></p>
        </div>
        <p className="text-5xl font-bold font-serif text-center text-[#10e07888]">
          <Typewriter
            words={["Welcome to our Job Application System."]}
            loop={Infinity}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white lg:p-10">
        <div className="bg-white p-6 rounded-lg shadow-2xl w-80">
          <h1 className="text-center text-2xl font-bold text-black">
            Forgot Password
          </h1>
          <h3 className="text-center text-xl font-medium mb-4 text-gray-400">
            Reset Password!
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col mt-6 form">
            <input
              type="email"
              name="email"
              id="email"
              required
              className="border p-2 rounded-md"
            />
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email address*
            </label>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-sm hover:bg-green-600 mt-6 mb-6"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
