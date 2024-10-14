import React from "react";
import {
  useTheme,
  useMediaQuery,
  Drawer,
  Box,
  Typography,
} from "@mui/material";
import { sidebarMenu } from "../menus";
import SidebarGroup from "./SidebarGroup"; // Import SidebarGroup component
import Search from "../Search";

const Logo = () => {
  return (
    <svg
      width="36"
      height="31"
      viewBox="0 0 36 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.6"
        d="M10.5128 0.224609L21.0256 15.2246L10.5128 30.2246L0 15.2246L10.5128 0.224609Z"
        fill="#718096"
      />
      <path
        opacity="0.6"
        d="M17.9999 0.224609L28.5127 15.2246L17.9999 30.2246L7.48706 15.2246L17.9999 0.224609Z"
        fill="#A0AEC0"
      />
      <path
        opacity="0.6"
        d="M25.4873 0.224609L36.0001 15.2246L25.4873 30.2246L14.9745 15.2246L25.4873 0.224609Z"
        fill="#718096"
      />
    </svg>
  );
};

interface SidebarProps {
  open: boolean;
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  open,
  drawerWidth,
  handleDrawerToggle,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={open}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "block" },
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          // position: "fixed",
          height: "100vh",
          // backgroundColor:
          //   theme.palette.mode === "dark"
          //     ? theme.palette.background.default // Dark theme background
          //     : theme.palette.background.default, // Light theme background
          padding: "12px", // Sidebar padding
          color: theme.palette.text.primary, // Text color based on theme
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Box>
          <Box display={"flex"} gap={3}>
            <Box display={"flex"} alignItems={"center"}>
              <Logo />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography variant="h5" fontWeight={600}>
                {/* Ethio Hisab */}
                App Name
              </Typography>
              <Typography variant="body2" color="textDisabled" fontWeight={300}>
                Saas Platform
              </Typography>
            </Box>
          </Box>
          <Box mt={3}>
            <Search />
          </Box>
        </Box>
        {sidebarMenu.map((menu) => (
          <SidebarGroup key={menu.group} menu={menu} />
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
