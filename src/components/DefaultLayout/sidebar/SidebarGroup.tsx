import React from "react";
import { List, ListSubheader } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { useTheme } from "@mui/material";
import { Menu } from "../../../models/menu";

interface SidebarGroupProps {
  menu: Menu;
}

const SidebarGroup: React.FC<SidebarGroupProps> = ({ menu }) => {
  const theme = useTheme();

  return (
    <List
      component="nav"
      aria-labelledby={`${menu.group}-subheader`}
      subheader={
        <ListSubheader
          component="div"
          id={`${menu.group}-subheader`}
          sx={{
            backgroundColor: "transparent", // Remove background color
            color: theme.palette.text.disabled, // Muted color for group name
            padding: "4px 8px", // Padding for group header
            fontWeight: 500, // Slightly bolder font for readability
          }}
        >
          {menu.group}
        </ListSubheader>
      }
    >
      {menu.items.map((item) => (
        <SidebarItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default SidebarGroup;
