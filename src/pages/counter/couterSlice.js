import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, loading: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state, action) {
      let count = action.payload ? action.payload.count : 1;
      state.count = state.count + count;
    },
    decrement(state, action) {
      let count = action.payload ? action.payload.count : 1;
      state.count = state.count - count;
    },
    reset() {
      return initialState;
    },
    startLoading(state, action) {
      state.loading = true;
    },
    endLoading(state, action) {
      state.loading = false;
    },
  },
});

export const asyncMinusByAmount = (amount) => {
  if (!Number.isInteger(amount)) {
    return;
  }
  return async (dispatch) => {
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(decrement({ count: amount }));
      dispatch(endLoading());
    }, 2000);
  };
};

export const asyncPlusByAmount = (amount) => {
  if (!Number.isInteger(amount)) {
    return;
  }
  return async (dispatch) => {
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(increment({ count: amount }));
      dispatch(endLoading());
    }, 2000);
  };
};

export const {
  increment,
  decrement,
  reset,
  startLoading,
  endLoading,
} = counterSlice.actions;
export default counterSlice.reducer;
