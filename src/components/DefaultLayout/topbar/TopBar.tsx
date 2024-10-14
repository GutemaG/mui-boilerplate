import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Tooltip,
  Menu,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import { useTheme } from "@mui/material";
import { useThemeContext } from "../../../libs/hooks/use-context";

interface TopBarProps {
  open: boolean;
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

const notifications = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ullam?",
  "Lorem ipsum dolor sit amet consectetur adipisicing.",
  "Lorem ipsum dolor sit.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum?",
];

const ITEM_HEIGHT = 150;

export const TOP_BAR_HEIGHT = 70;

const TopBar: React.FC<TopBarProps> = ({
  open,
  drawerWidth,
  handleDrawerToggle,
}) => {
  const theme = useTheme();
  const { toggleTheme, themeMode } = useThemeContext();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openAnchor = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: open ? `calc(100% - ${drawerWidth}px)` : "100%" },
        ml: { sm: open ? `${drawerWidth}px` : 0 },
        // backgroundColor:
        //   theme.palette.mode === "dark"
        //     ? theme.palette.background.default // Dark theme background
        //     : theme.palette.background.default, // Light theme background
        backdropFilter: "blur(10px)",
        transition: "width 0.3s, margin 0.3s",
        color: theme.palette.text.primary,
        boxShadow: "none",
        height: TOP_BAR_HEIGHT,
      }}
    >
      <Toolbar>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <IconButton
              color="inherit"
              aria-label="toggle drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              display={"flex"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Avatar alt="" src="" />
              <Box display={"flex"} flexDirection={"column"}>
                <Typography variant="h6" fontWeight={500}>
                  Profile Name
                </Typography>
                <Typography
                  variant="body1"
                  color="textDisabled"
                  sx={{ display: { xs: "none", sm: "inherit" } }}
                >
                  assign Role
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Tooltip title="Notification">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "notification" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <NotificationsNoneOutlinedIcon sx={{ color: "#000" }} />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="notification"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              open={openAnchor}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    minWidth: 500,
                  },

                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                    maxWidth: "20%",
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {notifications.map((notification) => {
                return (
                  <ListItem key={notification}>
                    {/* <MenuItem key={notification} onClick={handleClose}> */}
                    <Typography>{notification}</Typography>
                    {/* </MenuItem> */}
                  </ListItem>
                );
              })}
            </Menu>
            <IconButton
              color="inherit"
              sx={{ ml: 2, display: { xs: "none", sm: "inherit" } }}
            >
              <HelpOutlineOutlinedIcon />
            </IconButton>
            <Box>company switcher</Box>
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{ display: { xs: "none", sm: "inherit" } }}
            >
              {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
