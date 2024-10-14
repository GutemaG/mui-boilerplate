import { DefaultPage } from "../components/DefaultPage";

import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

//example data type
type Company = {
  id: number;
  name: string;
  tinNumber: string;
  generalManager: string;
  formOfBusiness: string;
  industryField: string;
  accountingPolicy: string;
  status: string;
};

const data: Company[] = [
  {
    id: 1,
    name: "Company A",
    tinNumber: "123-456-789",
    generalManager: "John Doe",
    formOfBusiness: "Corporation",
    industryField: "Technology",
    accountingPolicy: "Standard",
    status: "Active",
  },

  {
    id: 2,
    name: "Company A",
    tinNumber: "123-456-789",
    generalManager: "John Doe",
    formOfBusiness: "Corporation",
    industryField: "Technology",

    accountingPolicy: "Standard",
    status: "Active",
  },

  {
    id: 3,
    name: "Company A",
    tinNumber: "123-456-789",
    generalManager: "John Doe",
    formOfBusiness: "Corporation",
    industryField: "Technology",

    accountingPolicy: "Standard",
    status: "Active",
  },

  {
    id: 4,
    name: "Company A",
    tinNumber: "123-456-789",
    generalManager: "John Doe",
    formOfBusiness: "Corporation",
    industryField: "Technology",

    accountingPolicy: "Standard",
    status: "Active",
  },

  {
    id: 5,
    name: "Company A",
    tinNumber: "123-456-789",
    generalManager: "John Doe",
    formOfBusiness: "Corporation",
    industryField: "Technology",

    accountingPolicy: "Standard",
    status: "Active",
  },
];

export const CompanyList = () => {
  const theme = useTheme();

  const baseBackgroundColor =
    theme.palette.mode === "dark" ? "#1a202c" : "#fff";

  const columns = useMemo<MRT_ColumnDef<Company>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Company",
        size: 100,
        enablePinning: true,
      },
      {
        accessorKey: "tinNumber",
        header: "TIN Number",
        size: 100,
      },
      {
        accessorKey: "generalManager", //normal accessorKey
        header: "General Manger",
        size: 100,
      },
      {
        accessorKey: "formOfBusiness",
        header: "Form of Business",
        size: 100,
      },
      {
        accessorKey: "industryField",
        header: "Industry Field",
        size: 100,
      },

      {
        accessorKey: "accountingPolicy",
        header: "Accounting Policy",
        size: 100,
      },

      {
        accessorKey: "status",
        header: "Industry Field",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableDensityToggle: false,
    enableRowActions: true,
    enableColumnPinning: true,
    initialState: {
      columnPinning: { left: ["name"], right: ["mrt-row-actions"] },
    },
    positionActionsColumn: "last",
    // renderRowActionMenuItems: () => [<MenuItem key="action">Action</MenuItem>],
    renderRowActions: () => (
      <Box display={"flex"} gap={1}>
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#eff6ff",
            p: "6px",
          }}
          onClick={() => console.info("Edit")}
        >
          <EditOutlinedIcon />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#eff6ff",
            p: "6px",
          }}
          onClick={() => console.info("Delete")}
        >
          <RemoveRedEyeOutlinedIcon />
        </IconButton>
      </Box>
    ),

    muiTablePaperProps: {
      elevation: 0,
      // sx: {
      //   color: "red",
      // },
    },
    muiTopToolbarProps: {
      // define toolbar property like filter ,collapse,fullscreen
      sx: {
        // borderBottom: "1px solid #000",
      },
    },

    muiTableBodyCellProps: {
      sx: {
        // color: "red",
      },
    },
    rowPinningDisplayMode: "select-top",

    mrtTheme: (theme) => ({
      baseBackgroundColor: baseBackgroundColor,
      draggingBorderColor: theme.palette.secondary.main,
    }),
  });

  return (
    <DefaultPage
      title="Companies"
      breadCrumbLinks={[
        { href: "/", title: "Home" },
        { href: "/companies", title: "Companies" },
      ]}
      rightSideComponent={
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2D3748",
          }}
        >
          <AddOutlinedIcon />
          Add Company
        </Button>
      }
    >
      <Box>
        <MaterialReactTable table={table} />
      </Box>
    </DefaultPage>
  );
};
