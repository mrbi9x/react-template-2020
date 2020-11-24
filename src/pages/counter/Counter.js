import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
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
  const { count } = useSelector((state) => state.counter);
  const [amount, setamount] = useState(0);
  const [amountError, setamountError] = useState(false);
  const [loading, setLoading] = useState("idle");
  const dispatch = useDispatch();
  const handlerAmountChange = (event) => {
    const value = event.target.value;
    if (Number.isInteger(+value)) {
      setamount(+value);
      setamountError(false);
    } else {
      setamountError(true);
      setamount(+amount);
    }
  };
  const handlerAsyncCounterByAmount = (isIncrement) => {
    if (!Number.isInteger(+amount)) {
      return;
    }
    setLoading("loading");
    if (isIncrement) {
      dispatch(asyncPlusByAmount(amount));
    } else {
      dispatch(asyncMinusByAmount(amount));
    }
    setLoading("idle");
  };
  return (
    <Grid item sm={12}>
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
        >
          <Button
            variant="text"
            color="primary"
            size="small"
            disabled={loading !== "idle"}
            onClick={() => handlerAsyncCounterByAmount(true)}
          >
            {loading === "idle" ? "Async plus random" : <CircularProgress />}
          </Button>
          <TextField
            id="counterNumberChange"
            label="Number"
            variant="outlined"
            size="small"
            type="number"
            event={amount}
            onChange={handlerAmountChange}
            error={amountError}
          />
          <Button
            variant="text"
            color="primary"
            size="small"
            disabled={loading !== "idle"}
            onClick={() => handlerAsyncCounterByAmount(false)}
          >
            {loading === "idle" ? "Async plus random" : <CircularProgress />}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default Counter;
