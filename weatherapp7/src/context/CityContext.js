import { createContext, useState, useEffect } from "react";
import { useContext } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem("city") || "Ankara");

  useEffect(() => {}, [theme]);
  console.log(theme);
  localStorage.setItem("theme", theme);
  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
