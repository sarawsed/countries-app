import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";
import { HOME_ROUTE } from "../../constant/routes";
import { useTheme } from "../../context/ThemeProvider";
const Header = () => {
  const { theme, toggleTheme, themes } = useTheme();

  return (
    <AppBar
      position="sticky"
      style={{
        background: themes[theme].background,
        color: themes[theme].text,
      }}
    >
      <Toolbar className="container mx-auto flex justify-between">
        <Typography
          variant="h6"
          component="div"
          style={{ color: themes[theme].text }}
        >
          Countries App
        </Typography>
        <NavLink
          to={HOME_ROUTE}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 font-semibold"
              : "text-white hover:text-gray-300"
          }
          style={{ color: themes[theme].text }}
        >
          Home
        </NavLink>
        <Button
          variant="outlined"
          onClick={toggleTheme}
          style={{
            borderColor: themes[theme].text,
            color: themes[theme].text,
          }}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
