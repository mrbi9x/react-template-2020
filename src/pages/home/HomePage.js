import React from "react";
import Container from "@material-ui/core/Container";
import Feeds from "./Feeds";
import Test1 from "pages/tests/Test1";
const HomePage = () => {
  return (
    <>
    <Test1/>
      <Container maxWidth="sm" disableGutters>
        <Feeds />
      </Container>
    </>
  );
};

export default HomePage;
