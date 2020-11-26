import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({}));

const BottomNavigatorBar = () => {
  return (
    <BottomNavigation value={1} onChange={(event, value) => console.log(value)}>
      <BottomNavigationAction label="Home" value={1} icon={<Home />} />
    </BottomNavigation>
  );
};

export default BottomNavigatorBar;
