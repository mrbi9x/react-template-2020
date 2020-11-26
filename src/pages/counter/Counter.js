import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  asyncMinusByAmount,
  asyncPlusByAmount,
} from "./couterSlice";

function Counter() {
  const { count, loading } = useSelector((state) => state.counter);
  const [amount, setamount] = useState(1);
  const dispatch = useDispatch();
  const handlerAmountChange = (event) => {
    const value = event.target.value;
    if (Number.isInteger(+value)) {
      setamount(+value);
    } else {
      setamount(+amount);
    }
  };
  const handlerAsyncCounterByAmount = (isIncrement) => {
    if (!Number.isInteger(+amount)) {
      return;
    }
    if (isIncrement) {
      dispatch(asyncPlusByAmount(amount));
    } else {
      dispatch(asyncMinusByAmount(amount));
    }
  };
  return (
    <Grid item sm={12}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        m={5}
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
            color="primary"
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
            color="primary"
            aria-label="Increment"
            onClick={() => dispatch(increment())}
          >
            <Add />
          </IconButton>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignContent="center"
          m={2}
        >
          <Button
            variant="text"
            color="primary"
            size="small"
            disabled={loading}
            startIcon={loading ? <CircularProgress size="1rem" /> : <Remove />}
            onClick={() => handlerAsyncCounterByAmount(false)}
          >
            <Typography
              variant="button"
              color="initial"
              noWrap
            >{`Async minus by ${amount}`}</Typography>
          </Button>
          <TextField
            id="counterNumberChange"
            label="Number"
            variant="outlined"
            size="small"
            value={amount}
            onChange={handlerAmountChange}
          />
          <Button
            variant="text"
            color="primary"
            size="small"
            disabled={loading}
            endIcon={loading ? <CircularProgress size="1rem" /> : <Add />}
            onClick={() => handlerAsyncCounterByAmount(true)}
          >
            <Typography
              variant="button"
              color="initial"
              noWrap
            >{`Async plus by ${amount}`}</Typography>
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default Counter;
