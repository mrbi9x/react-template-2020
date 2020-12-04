import React from "react";
import Container from "@material-ui/core/Container";
import Feeds from "./Feeds";
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
