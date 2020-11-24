import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state, action) {
      let count = action.payload ? action.payload.count : 1;
      return { count: state.count + count };
    },
    decrement(state, action) {
      let count = action.payload ? action.payload.count : 1;
      return { count: state.count - count };
    },
    reset() {
      return initialState;
    },
  },
});

export const asyncMinusByAmount = (amount) => {
  if (!Number.isInteger(amount)) {
    return;
  }
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(decrement({ count: amount }));
    }, 2000);
  };
};

export const asyncPlusByAmount = (amount) => {
  if (!Number.isInteger(amount)) {
    return;
  }
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(increment({ count: amount }));
    }, 2000);
  };
};

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
