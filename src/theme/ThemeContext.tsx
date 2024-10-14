import { createContext, useState, ReactNode } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

type ThemeContextType = {
  toggleTheme: () => void;
  themeMode: "light" | "dark";
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
      background: {
        default: themeMode === "dark" ? "#1a202c" : "#EDF2F7", // Default background color
        paper: themeMode === "dark" ? "#1e1e1e" : "#ffffff", // Paper background color
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(10px)",
            backgroundColor: themeMode === "dark" ? "#1a202c" : "#fff", // Adjust based on theme mode
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
