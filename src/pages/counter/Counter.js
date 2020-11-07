import { Box, Button, Grid, IconButton } from "@material-ui/core";
import React from "react";
import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./couterSlice";

function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <Grid>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        mt={2}
      >
        <Button variant="text" color="primary" size="small">
          {count}
        </Button>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignContent="center"
        >
          <IconButton
            aria-label="Decrement"
            onClick={() => dispatch(decrement())}
          >
            <Remove />
          </IconButton>
          <Button
            variant="text"
            color="primary"
            size="small"
            onClick={() => dispatch(reset())}
          >
            Reset
          </Button>
          <IconButton
            aria-label="Increment"
            onClick={() => dispatch(increment())}
          >
            <Add />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
}

export default Counter;
