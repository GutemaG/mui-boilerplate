import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

export const CompanyInformationForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={7}>
          <Typography variant="h5" color="textDisabled" fontWeight={"bold"}>
            Company Information
          </Typography>
          <TextField
            id="company-name"
            label="Company Name"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="company-address"
            label="Company Address"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="company-tin"
            label="Company TIN"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="company-capital"
            label="Company Paid-up Capital"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <Box mt={2}>
            <Typography variant="h5" color="textDisabled" fontWeight={"bold"}>
              Company Information
            </Typography>
            <TextField
              id="general-manager-name"
              label="General Manager Full Name"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              id="general-manager-email"
              label="General Manager Email"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              id="general-manager-mobile"
              label="General Manager Mobile Number"
              variant="standard"
              fullWidth
              margin="normal"
            />
          </Box>
        </Grid>
        <Grid size={5}>
          <Box>
            <Typography variant="h5" color="textDisabled" fontWeight={"bold"}>
              Company Customer
            </Typography>
            <TextField
              id="supplier-company-name"
              label="Name of Supplier Company"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              id="supplier-company-address"
              label="Address of Supplier Company"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              id="supplier-tin"
              label="Supplier TIN (optional)"
              variant="standard"
              fullWidth
              margin="normal"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
