import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
