import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const CompanyFieldBusinessAndTaxOfficeForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* First Grid for Company Field of Business */}
        <Grid size={7}>
          {/* Title for the section */}
          <Typography variant="h6" gutterBottom>
            Company Field of Business
          </Typography>

          {/* TextFields for Company Field of Business */}
          <TextField
            id="number-field-business"
            label="Number of Field of Business"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="total-number-field-business"
            label="Total Number of Field of Business"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="license-number-field-business"
            label="License Number of Field of Business"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="license-renewal-fiscal-year"
            label="License Renewal of the Specific Fiscal Year"
            variant="standard"
            fullWidth
            margin="normal"
          />
        </Grid>

        {/* Second Grid for Company Tax Office Center */}
        <Grid size={5}>
          {/* Title for the section */}
          <Typography variant="h6" gutterBottom>
            Company Tax Office Center
          </Typography>

          {/* TextFields for Company Tax Office Center */}
          <TextField
            id="tax-office-center-name"
            label="Tax Office Center Name"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="tax-office-center-address"
            label="Tax Office Center Address"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="company-profile"
            label="Company Profile"
            variant="standard"
            fullWidth
            margin="normal"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyFieldBusinessAndTaxOfficeForm;
