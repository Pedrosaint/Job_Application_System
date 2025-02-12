import React, { createContext, useReducer, useEffect, Dispatch } from "react";

// Define Theme State Type
type ThemeState = "light" | "dark";

// Define Action Type
type ThemeAction =
  | { type: "TOGGLE_THEME" }
  | { type: "SET_THEME"; payload: ThemeState };

// Define Context Type
interface ThemeContextType {
  theme: ThemeState;
  dispatch: Dispatch<ThemeAction>;
}

// Create Context with Initial Type
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Reducer Function
const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "dark" ? "light" : "dark";
    case "SET_THEME":
      return action.payload;
    default:
      return state;
  }
};

// ThemeProvider Component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as ThemeState) || "light";
    dispatch({ type: "SET_THEME", payload: savedTheme });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
