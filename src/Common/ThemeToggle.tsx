// import React, { useContext, useEffect } from "react";
// import { ThemeContext } from "../Context/ThemeContext"; // Ensure correct path

// const ThemeToggle: React.FC = () => {
//     const themeContext = useContext(ThemeContext);
    

//   if (!themeContext) {
//     throw new Error("ThemeToggle must be used within a ThemeProvider");
//   }

//     const { theme, dispatch } = themeContext;
    
//     useEffect(() => {
//       if (theme === "dark") {
//         document.documentElement.classList.add("dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//       }
//     }, [theme]);


//   return (
//     <div className="flex items-center space-x-2 ml-2">
//       <label className="relative inline-flex items-center cursor-pointer">
//         <input
//           type="checkbox"
//           checked={theme === "dark"}
//           onChange={() => dispatch({ type: "TOGGLE_THEME" })}
//           className="sr-only peer"
//         />
//         <div className="w-10 h-6 bg-custom-gradient dark:bg-gray-600 rounded-full peer peer-checked:bg-gray-100 peer-focus:ring-2 peer-focus:ring-blue-400 transition-all">
//           <div
//             className={`absolute top-1 left-1 w-4 h-4 dark:bg-white bg-gray-800 rounded-full shadow-md transform transition-transform ${
//               theme === "dark" ? "translate-x-4" : ""
//             }`}
//           ></div>
//         </div>
//       </label>
//     </div>
//   );
// };

// export default ThemeToggle;

import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className=" bg-gray-200 dark:bg-gray-800 rounded"
    >
      {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
