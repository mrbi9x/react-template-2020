import {
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import { Home, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "auto",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.background.paper,
  },
}));

const BottomNavigatorBar = () => {
  const { pathname } = useLocation();
  const [currentRoute, setCurrentRoute] = useState(pathname);
  const todosCount = useSelector((state) => state.todos.length);
  const classes = useStyles();
  return (
    <>
      <Toolbar />
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
    </>
  );
};

export default BottomNavigatorBar;
