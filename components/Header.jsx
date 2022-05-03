import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  createTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const Header =  () => {

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={theme.logo}>
          Process Visualization
        </Typography>
              <Link to="/" className={theme.link}>
                General
              </Link>
            <Link to="/developerDetails" className={theme.link}>
              DeveloperDetails
            </Link>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
    
  );
}
export default Header;