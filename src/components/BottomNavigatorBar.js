import {
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
  makeStyles,
  Badge,
} from "@material-ui/core";
import {
  Home,
  Menu,
  Notifications,
  Chat,
  TrendingUp,
} from "@material-ui/icons";
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
  const TodoIcon = (
    <Badge badgeContent={todosCount} color="secondary" max={9} variant="dot">
      <Chat />
    </Badge>
  );
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
          label={"Todos"}
          value="/todos"
          icon={TodoIcon}
          component={NavLink}
          to="/todos"
        />
        <BottomNavigationAction
          label="Counter"
          value="/counter"
          icon={<Notifications />}
          component={NavLink}
          to="/counter"
        />
        <BottomNavigationAction
          label="Virtuoso"
          value="/testVirtuoso"
          icon={<TrendingUp />}
          component={NavLink}
          to="/testVirtuoso"
        />{" "}
        <BottomNavigationAction
          label="Posts"
          value="/posts"
          icon={<Menu />}
          component={NavLink}
          to="/posts"
        />
      </BottomNavigation>
    </>
  );
};

export default BottomNavigatorBar;
