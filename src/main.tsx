import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeContextProvider from "./theme/ThemeContext.tsx";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing.tsx";
import { StyledEngineProvider } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </ThemeContextProvider>
    </StyledEngineProvider>
  </StrictMode>
);
