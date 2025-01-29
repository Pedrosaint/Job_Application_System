import React, { useState, FormEvent } from "react";
import { useAuth } from "../Context/AuthContext";
import { EyeOff, Eye } from "lucide-react";
import { FaRegEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Outlet, useNavigate } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typewriter } from "react-simple-typewriter";
import Gif from "../assets/GIf/vid1.mp4"

const Login: React.FC = () => {
  const { login, register, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Login function
  const handleLogin = async () => {
    try {
      await login(email, password);
      toast.success("Login Successful!", { position: "top-right" });
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Login failed", { position: "top-right" });
    }
  };

  // Register function
  const handleRegister = async () => {
    try {
      await register(email, password, fname, lname);
      toast.success("Registered Successfully!", { position: "top-right" });
      setIsLogin(true); // Switch to the login form after registration
    } catch (err) {
      console.error(err);
      toast.error("Already a User", { position: "top-right" });
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("User Logged in Successfully!", { position: "top-right" });
      navigate("/");
    } catch (err) {
      toast.error("Google Login failed");
    }
  };

  // Reset Password
  const resetPassword = () => {
    navigate("/reset");
  };

  // Toggle between Login and Signup forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Toggle the visibility of the password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="h-screen flex overflow-hidden">
        {/* Left Section */}
        <div className="hidden w-1/2 lg:flex flex-col justify-center h-full relative">
          <video
            src={Gif}
            autoPlay
            loop
            muted
            className="inset-0 w-full h-full object-cover transform rounded-br-full rounded-tr-full"
          />
          <p className="text-xl font-extrabold font-serif text-[#fff] bg-green-800 rounded-2xl p-2 m-2 absolute bottom-8 left-1">
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
          <div className="w-full max-w-md p-3">
            <div className="bg-white text-black p-5 m-2 rounded-lg shadow-2xl ">
              <h2 className="text-2xl font-bold mb-2 text-center">
                {isLogin ? "Login" : "Sign Up"}
              </h2>
              <h3 className="text-center text-2xl font-medium mb-6 text-gray-400">
                {isLogin ? "Welcome back!" : ""}
              </h3>
              {isLogin ? (
                <form
                  className="space-y-4 p-4"
                  onSubmit={(e: FormEvent) => {
                    e.preventDefault(); // Prevent form reload
                    handleLogin();
                  }}
                >
                  <div className="main mt-5">
                    <div className="flex items-center relative">
                      <FaRegEnvelope
                        color="gray"
                        size={17}
                        className="absolute left-2 top-1/2 top-rightansform -translate-y-[45%]"
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder=""
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="block text-sm font-medium mb-1">
                        Email address*
                      </label>
                    </div>
                  </div>

                  <div className="relative password-field main">
                    <div className="flex items-center relative mt-8">
                      <FiLock
                        color="gray"
                        size={17}
                        className="absolute left-2"
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        required
                        placeholder=" "
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="block text-sm font-medium mb-1">
                        Password
                      </label>
                      <button
                        type="button"
                        className="absolute right-2 text-gray-400"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <Eye size={18} />
                        ) : (
                          <EyeOff size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="text-gray-900 sm:ml-48 ml-36"
                    onClick={resetPassword}
                  >
                    Forgot password?
                  </button>
                </form>
              ) : (
                <form
                  className="space-y-4 p-3"
                  onSubmit={(e: FormEvent) => {
                    e.preventDefault();
                    handleRegister();
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:gap-x-4 mt-6">
                    <label className="block text-sm font-medium mb-2 sm:mb-0 sm:flex-1 fname">
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder=" "
                        onChange={(e) => setFname(e.target.value)}
                        required
                      />
                      <span className="block text-sm font-medium mb-1">
                        First Name
                      </span>
                    </label>

                    <label className="block text-sm font-medium mb-1 sm:flex-1 lname">
                      <input
                        type="text"
                        name="lname"
                        id="lname"
                        placeholder=" "
                        onChange={(e) => setLname(e.target.value)}
                        required
                      />
                      <span className="block text-sm font-medium mb-1">
                        Last Name
                      </span>
                    </label>
                  </div>
                  <div className="main">
                    <div className="flex items-center relative mt-6">
                      <FaRegEnvelope
                        color="gray"
                        size={17}
                        className="absolute left-2 top-1/2 top-rightansform -translate-y-[45%]"
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder=" "
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="block text-sm font-medium mb-1">
                        Email address*
                      </label>
                    </div>
                  </div>

                  <div className="relative password-field main">
                    <div className="flex items-center relative mt-6">
                      <FiLock
                        color="gray"
                        size={17}
                        className="absolute left-2"
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder=" "
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="block text-sm font-medium mb-1">
                        Password
                      </label>
                      <button
                        type="button"
                        className="absolute right-2 text-gray-400"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <Eye size={18} />
                        ) : (
                          <EyeOff size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Sign Up
                  </button>
                </form>
              )}

              <div>
                <p className="text-sm text-center text-gray-500">
                  or sign up with
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <button
                    className="bg-[#f1ecec] text-gray-500 p-2 rounded-md hover:text-blue-400 transition-colors flex items-center justify-center"
                    onClick={handleGoogleLogin}
                  >
                    <FcGoogle size={25} />
                    <span className="font-semibold text-xl ml-5">
                      Continue with Google
                    </span>
                  </button>
                </div>
              </div>

              <p className="text-sm mt-6 text-center text-gray-500">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  className="text-blue-500 ml-2 hover:underline"
                  onClick={toggleForm}
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
