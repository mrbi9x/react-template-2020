import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Container,
  Avatar,
  Badge,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { BubbleChart } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
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
  const notifyCount = useSelector((state) => state.counter.count);
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
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
            <IconButton
              aria-label="current user"
              onClick={(e) => console.log(e)}
            >
              <Badge
                badgeContent={notifyCount}
                color="error"
                invisible={notifyCount < 1}
              >
                <Avatar className={classes.smallAvatar} />
              </Badge>
            </IconButton>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
