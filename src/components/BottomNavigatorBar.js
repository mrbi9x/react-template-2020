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
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "auto",
    bottom: 0,
    left: 0,
    right: 0,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  bottomNavigation: {
    flexGrow: 1,
  },
  BottomNavigationAction: {
    minWidth: "50px",
    // padding: 0,
  },
}));

const BottomNavigatorBar = () => {
  const { pathname } = useLocation();
  const todosCount = useSelector((state) => state.todos.length);
  const counterCount = useSelector((state) => state.counter.count);
  const classes = useStyles();
  const TodoIcon = (
    <Badge badgeContent={todosCount} color="primary" max={9} variant="dot">
      <Chat />
    </Badge>
  );
  const NotifyIcon = (
    <Badge badgeContent={counterCount} color="secondary" max={9} variant="dot">
      <Notifications />
    </Badge>
  );
  return (
    <>
      <Toolbar />
      <Toolbar className={classes.root}>
        <BottomNavigation
          value={pathname}
          className={classes.bottomNavigation}
          showLabels={true}
        >
          <BottomNavigationAction
            label="Home"
            value="/"
            icon={<Home />}
            component={NavLink}
            to="/"
            disableRipple
            className={classes.BottomNavigationAction}
          />
          <BottomNavigationAction
            label={"Todos"}
            value="/todos"
            icon={TodoIcon}
            component={NavLink}
            to="/todos"
            disableRipple
            className={classes.BottomNavigationAction}
          />
          <BottomNavigationAction
            label="Counter"
            value="/counter"
            icon={NotifyIcon}
            component={NavLink}
            to="/counter"
            disableRipple
            className={classes.BottomNavigationAction}
          />
          <BottomNavigationAction
            label="List"
            value="/dynamicVirtualList"
            icon={<TrendingUp />}
            component={NavLink}
            to="/dynamicVirtualList"
            disableRipple
            className={classes.BottomNavigationAction}
          />
          <BottomNavigationAction
            label="Posts"
            value="/posts"
            icon={<Menu />}
            component={NavLink}
            to="/posts"
            disableRipple
            className={classes.BottomNavigationAction}
          />
        </BottomNavigation>
      </Toolbar>
    </>
  );
};

export default BottomNavigatorBar;
