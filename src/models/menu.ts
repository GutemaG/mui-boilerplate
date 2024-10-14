import { ReactNode } from "react";

export interface MenuItem {
  name: string;
  url?: string; // URL is optional because parent items may not have URLs
  icon?: ReactNode; // ReactNode allows passing JSX like <HomeIcon />
  children?: MenuItem[]; // Optional children for submenus
}

export interface Menu {
  group: string;
  items: MenuItem[];
}
