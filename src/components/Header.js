import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Grid,
  Container,
  Avatar,
  Badge,
  makeStyles,
} from "@material-ui/core";
import { BubbleChart } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  brandHeader: {
    display: "flex",
    alignItems: "center",
    "& span": {
      fontWeight: 700,
      letterSpacing: 0,
    },
  },
  smallAvatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

function Header() {
  const [activeTabNav, setActiveTabNav] = useState("counter");
  const notifyCount = useSelector((state) => state.counter.count);
  const todosCount = useSelector((state) => state.todos.length);
  const classes = useStyles();
  const history = useHistory();

  const handlerTabNavChange = (event, newValue) => {
    setActiveTabNav(newValue);
    history.push(`/${newValue}`);
  };

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="lg">
        <Toolbar>
          <Grid
            container
            item
            wrap="nowrap"
            justify="space-between"
            alignContent="center"
            alignItems="center"
          >
            <NavLink to="/" className={classes.brandHeader}>
              <BubbleChart color="secondary" fontSize="large" />
              <Typography color="primary" variant="h6" component="span" noWrap>
                React template
              </Typography>
            </NavLink>
            <Tabs
              value={activeTabNav}
              onChange={handlerTabNavChange}
              aria-label="Navigation"
              color="primary"
              textColor="primary"
              indicatorColor="primary"
              centered
            >
              <Tab label="Counter" value="counter" disableRipple />
              <Tab label={`todos(${todosCount})`} value="todos" disableRipple />
              <Tab label="Posts" value="posts" disableRipple />
            </Tabs>
            <Badge
              badgeContent={notifyCount}
              color="error"
              invisible={notifyCount < 1}
            >
              <Avatar className={classes.smallAvatar} />
            </Badge>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
