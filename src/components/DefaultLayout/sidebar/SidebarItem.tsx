import React, { useState } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavLink, useLocation } from "react-router-dom";

import { MenuItem } from "../../../models/menu";
import { useTheme } from "@mui/material";

interface SidebarItemProps {
  item: MenuItem;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  // Check if the current item or any of its children is active
  const isActive = (url?: string) => {
    return url ? location.pathname.startsWith(url) : false;
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ListItemButton
        component={item.url ? NavLink : "div"} // Use "div" if no URL (for parent items)
        to={item.url || ""}
        onClick={item.children ? handleExpand : undefined}
        sx={{
          "&.active": {
            backgroundColor: theme.palette.action.selected, // Highlight active item
            color: theme.palette.primary.main, // Change color for active item
          },
          "&.active:hover": {
            backgroundColor: theme.palette.action.hover, // Adjust hover for active
          },
          padding: "4px 8px", // Padding for each menu item
          marginBottom: "8px", // Gap between items
          color: isActive(item.url)
            ? theme.palette.primary.main
            : theme.palette.text.primary, // Adjust text color based on theme and active state
          "&:hover": {
            backgroundColor: theme.palette.action.hover, // Background color on hover
          },
        }}
        // Adding className "active" manually for highlighting active item
        className={isActive(item.url) ? "active" : ""}
      >
        {item.icon && (
          <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
        )}

        <ListItemText primary={item.name} />
        {item.children ? expanded ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItemButton>
      {item.children && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((child) => (
              <ListItemButton
                key={child.name}
                component={NavLink}
                to={child.url || ""}
                sx={{
                  "&.active": {
                    backgroundColor: theme.palette.action.selected, // Highlight active item
                    color: theme.palette.primary.main, // Change color for active item
                  },
                  "&.active:hover": {
                    backgroundColor: theme.palette.action.hover, // Adjust hover for active
                  },
                  padding: "4px 8px", // Padding for each menu item
                  pl: 4, // Indent sub-items
                  marginBottom: "8px", // Gap between items
                  borderRadius: "4px", // Optional: for better UI
                  color: isActive(item.url)
                    ? theme.palette.primary.main
                    : theme.palette.text.primary, // Adjust text color based on theme and active state
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover, // Background color on hover
                  },
                }}
                className={isActive(child.url) ? "active" : ""}
              >
                {item.icon && (
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                )}
                <ListItemText primary={child.name} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SidebarItem;
