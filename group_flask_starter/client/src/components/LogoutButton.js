import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import { logout } from "../store/auth"
import Cookies from "js-cookie";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const colors = {
  text: "white",
  background: "rgb(0, 149, 246)",
  backgroundHover: "rgb(228, 230, 232)",
};

const useStyles = makeStyles({
  root: {
    textTransform: "none",
    fontWeight: "normal",
    fontSize: "16px",
    padding: "12 24",
    borderRadius: "3px",
    color: colors.text,
    backgroundColor: colors.background,
    "&:hover": {
      backgroundColor: colors.backgroundHover,
    },
  },
});

function LogoutButton(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleLogout = (e) => {
    const res = dispatch(logout());
    //debugger
    if (res.ok) Cookies.remove("token");
    console.log("logoutbutton.js")
    return <Redirect to="/" />

  };

  return (
    <div id="logout-button">
      <Button
        onClick={handleLogout}
        classes={classes}
        type="click"
        variant="outlined"
        size="small"
        {...props}
      />
    </div>
  );
}

export default LogoutButton;
