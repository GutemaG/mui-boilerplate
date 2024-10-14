import {
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const CompanyBusinessForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* First Grid for Business Company Form */}
        <Grid size={7}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Form of Business Company
            </Typography>
            <Box ml={3}>
              <RadioGroup name="businessForm">
                <FormControlLabel
                  value="sole"
                  control={<Radio />}
                  label="Sole Proprietorship (Sole)"
                />
                <FormControlLabel
                  value="plc"
                  control={<Radio />}
                  label="Private Limited Company (PLC)"
                />
                <FormControlLabel
                  value="sc"
                  control={<Radio />}
                  label="Share Company (SC)"
                />
                <FormControlLabel
                  value="cooperative"
                  control={<Radio />}
                  label="Cooperative"
                />
                <FormControlLabel
                  value="generalPartnership"
                  control={<Radio />}
                  label="General Partnership"
                />
                <FormControlLabel
                  value="limitedLiabilityPartnership"
                  control={<Radio />}
                  label="Limited Liability Partnership"
                />
                <FormControlLabel
                  value="jointVenture"
                  control={<Radio />}
                  label="Joint Venture (JV)"
                />
              </RadioGroup>
            </Box>
          </Box>

          <Box mt={3}>
            {/* Title for Manufacturing Business */}
            <Typography variant="h6" gutterBottom>
              Manufacturing Business
            </Typography>

            {/* TextFields for Manufacturing Business */}
            <TextField
              id="supplier-stock"
              label="Supplier Stock"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              id="raw-material-inventory"
              label="Raw Material Inventory"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              id="finished-material-inventory"
              label="Finished Material Inventory"
              variant="standard"
              fullWidth
              margin="normal"
            />
          </Box>
        </Grid>

        {/* Second Grid for Merchandise Business */}
        <Grid size={5}>
          {/* Title for the section */}
          <Typography variant="h6" gutterBottom>
            Merchandise Business
          </Typography>

          {/* TextFields for Merchandise Business */}
          <TextField
            id="supplies-stock"
            label="Supplies Stock"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="merchandising-goods"
            label="Merchandising Goods"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="number-field-business"
            label="Number of Field of Business"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="trade-number-field-business"
            label="Trade Number of Field of Business"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="license-number-field-business"
            label="Licence Number of Field of Business"
            variant="standard"
            fullWidth
            margin="normal"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyBusinessForm;
