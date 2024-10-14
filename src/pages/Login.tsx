import React from "react";
import { Button, Box, Typography } from "@mui/material";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        width: "100%",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Button variant="contained" color="primary" onClick={onLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
