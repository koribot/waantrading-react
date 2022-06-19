import { createContext, useState } from "react";
const ThemeContext = createContext();

export const Theme = ({ children }) => {
  const currentMode = localStorage.getItem("mode");
  const [theme, setTheme] = useState(
    currentMode === null
      ? "Light"
      : currentMode === "Light"
      ? "Light"
      : currentMode === "Dark"
      ? "Dark"
      : "Light"
  );
  const [modal, setModal] = useState(false);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "Dark" ? "Light" : "Dark"));
    localStorage.setItem("mode", theme === "Dark" ? "Light" : "Dark");
  };
  return (
    <ThemeContext.Provider
      value={{ theme, currentMode, toggleTheme, modal, setModal }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
