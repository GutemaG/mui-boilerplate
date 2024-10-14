import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

const CssTextField = styled(TextField)({
  borderRadius: "8px",
  "& label": {
    color: "#000", // Change label color to black
  },
  "& label.Mui-focused": {
    color: "#000", // Ensure label remains black when focused
    borderRadius: "8px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #ccc",
    },
  },
  "& .MuiOutlinedInput-input": {
    "&::placeholder": {
      color: "#000", // Change placeholder color to black
      opacity: 0.5, // Ensure the placeholder color is fully opaque
    },
  },
});

function Search() {
  return (
    <CssTextField
      label=""
      id="custom-css-outlined-input"
      placeholder="Search here"
      size="small"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#000" }} />
          </InputAdornment>
        ),
      }}
      sx={{ backgroundColor: "#E2E8F0", color: "#ff0000" }}
    />
  );
}

export default Search;
