import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import history from "../history";
import { connect } from "react-redux";
import { logout } from "../actions/usersActions";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            FLIXBOT
            <Button
              onClick={() => {
                history.push("/homepage");
              }}
              color="inherit"
            >
              FLIXBOT
            </Button>
          </Typography>
          <Button
            onClick={() => {
              history.push("/profile");
            }}
            color="inherit"
          >
            My Profile
          </Button>
          <Button
            onClick={() => {
              history.push("/Movies");
            }}
            color="inherit"
          >
            Movies
          </Button>
          <Button
            onClick={() => {
              history.push("/login");
            }}
            color="inherit"
          >
            Login
          </Button>

          <Button
            onClick={() => {
              props.logout();
              history.push("/");
            }}
            color="inherit"
          >
            Logout
          </Button>

          <Button
            onClick={() => {
              history.push("/signup");
            }}
            color="inherit"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  { logout }
)(withStyles(styles)(ButtonAppBar));
