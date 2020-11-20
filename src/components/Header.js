import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Grid,
  IconButton,
  Container,
  makeStyles,
} from "@material-ui/core";
import { AccountCircle, BubbleChart } from "@material-ui/icons";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  brandHeader: {
    display: "flex",
    alignItems: "center",
    "& span": {
      fontWeight: 700,
      letterSpacing: 0,
    },
  },
});

function Header() {
  const [activeTabNav, setActiveTabNav] = useState("counter");
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
            <Link to="/" className={classes.brandHeader}>
              <BubbleChart color="secondary" fontSize="large" />
              <Typography color="primary" variant="h6" component="span" noWrap>
                React template
              </Typography>
            </Link>
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
              <Tab label="Todos" value="todos" disableRipple />
              <Tab label="Posts" value="posts" disableRipple />
            </Tabs>
            <IconButton aria-label="Account">
              <AccountCircle />
            </IconButton>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
