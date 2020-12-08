import React from "react";
import Container from "@material-ui/core/Container";
import Feeds from "./Feeds";
import Grid from "@material-ui/core/Grid";

// import Test1 from "pages/tests/Test1";
const HomePage = () => {
  return (
    <>
      <Container maxWidth="sm" disableGutters>
        <Feeds />
      </Container>
    </>
  );
};

export default HomePage;
