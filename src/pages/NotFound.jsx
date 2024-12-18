import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../constant/routes";
import { useTheme } from "../context/ThemeProvider";
const NotFound = () => {
  const navigate = useNavigate();
  const { theme, themes } = useTheme();

  return (
    <Box
      className="flex flex-col justify-center items-center min-h-screen text-center"
      style={{
        background: themes[theme].background, 
        color: themes[theme].text,
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <Typography variant="h3" color="error" gutterBottom>
        NOT FOUND
      </Typography>
      <Button
        onClick={() => navigate(HOME_ROUTE)}
        variant="contained"
        color="primary"
      >
        Back To Home
      </Button>
    </Box>
  );
};

export default NotFound;
