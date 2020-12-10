import React from "react";
import { useScrollTrigger, Slide } from "@material-ui/core";

export default function ScrollToggle(props) {
  const {
    threshold = 100,
    disableHysteresis = false,
    children,
    reverse = true,
  } = props;
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: disableHysteresis,
    threshold: threshold,
  });
  return (
    <Slide
      in={scrollTrigger}
      direction={reverse ? "up" : "down"}
      timeout={500}
      appear={false}
    >
      {children}
    </Slide>
  );
}
