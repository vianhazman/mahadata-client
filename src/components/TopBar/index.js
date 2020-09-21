import AppBar from "@material-ui/core/AppBar";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 9,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const TopBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#2E3B55" }} position="static">
        <Toolbar>
          <Typography variant="h6" align="center" className={classes.title}>
            Pandemic Mobility Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
