import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"; // Added import for HomeIcon
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import { Menu } from "../../models/menu";

export const sidebarMenu: Menu[] = [
  {
    group: "Accounting",
    items: [
      {
        name: "Dashboard",
        url: "/home",
        icon: <HomeOutlinedIcon />,
      },

      {
        name: "Company Management",
        url: "/companies",
        icon: <CorporateFareOutlinedIcon />,
      },

      {
        name: "Chart of Accounts",
        url: "/about",
        icon: <AccountBalanceOutlinedIcon />,
      },

      {
        name: "Receipt Management",
        url: "/receipt-management",
        icon: <ReceiptOutlinedIcon />,
        children: [
          {
            name: "Create Receipt",
            url: "/receipt-management/create",
            icon: <ReceiptOutlinedIcon />,
          },
          {
            name: "Receipt List",
            url: "/receipt-management/list",
            icon: <ReceiptOutlinedIcon />,
          },
        ],
      },

      {
        name: "Tax Management",
        url: "/tax-mangment",
        icon: <GavelOutlinedIcon />,
        children: [
          {
            name: "Create Tax",
            url: "/tax-management/create",
            icon: <GavelOutlinedIcon />,
          },
          {
            name: "Tax List",
            url: "/tax-management/list",
            icon: <GavelOutlinedIcon />,
          },
        ],
      },

      {
        name: "Payroll Management",
        url: "/about",
        icon: <AttachMoneyIcon />,
        children: [
          {
            name: "Create Payroll",
            url: "/payroll-management/create",
            icon: <AttachMoneyIcon />,
          },
          {
            name: "Payroll List",
            url: "/payroll-management/list",
            icon: <AttachMoneyIcon />,
          },
        ],
      },
    ],
  },
  {
    group: "Inventory",
    items: [
      {
        name: "Inventory Management",
        url: "/inventory-management",
        icon: <PersonIcon />,
        children: [
          {
            name: "Create Inventory",
            url: "/inventory-management/create",
            icon: <PersonIcon />,
          },
          {
            name: "Inventory List",
            url: "/inventory-management/list",
            icon: <PersonIcon />,
          },
        ],
      },
    ],
  },
  {
    group: "User",
    items: [
      {
        name: "User Management",
        url: "/user-management",
        icon: <GroupIcon />,
      },
      {
        name: "Logout",
        url: "/logout",
        icon: <ExitToAppIcon />,
      },
    ],
  },
];
