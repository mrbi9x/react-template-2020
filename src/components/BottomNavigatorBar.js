import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import { Home, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "auto",
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: "100px",
  },
}));

const BottomNavigatorBar = () => {
  const [currentRoute, setCurrentRoute] = useState("/");
  const todosCount = useSelector((state) => state.todos.length);
  const classes = useStyles();
  return (
    <BottomNavigation
      value={currentRoute}
      onChange={(event, newValue) => setCurrentRoute(newValue)}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        value="/"
        icon={<Home />}
        component={NavLink}
        to="/"
      />
      <BottomNavigationAction
        label="Counter"
        value="/counter"
        icon={<Menu />}
        component={NavLink}
        to="/counter"
      />
      <BottomNavigationAction
        label={`(${todosCount})Todos`}
        value="/todos"
        icon={<Menu />}
        component={NavLink}
        to="/todos"
      />
    </BottomNavigation>
  );
};

export default BottomNavigatorBar;
