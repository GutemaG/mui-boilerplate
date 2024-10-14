import React, { ReactNode, Suspense, useState } from "react";
import { Box } from "@mui/material";
import TopBar from "./topbar/TopBar";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

interface LayoutProps {
  children?: ReactNode;
}

const drawerWidth = 300;

const Layout: React.FC<LayoutProps> = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar
        open={open}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Sidebar
        open={open}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: open ? `calc(100vw - ${drawerWidth}px)` : "100vw",
          ml: { sm: open ? `${drawerWidth}px` : 0 },
          mt: 8, // Offset for AppBar height
          transition: "width 0.3s, margin 0.3s",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "flex-start",
          minHeight: "90vh",
          overflow: "auto",
        }}
      >
        <Suspense fallback={<>Loading</>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Layout;
