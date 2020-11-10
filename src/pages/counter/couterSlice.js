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

export const asyncMinusRandom = () => {
  return async (dispatch) => {
    let ranNum = Math.floor(Math.random() * 10 + 1);
    setTimeout(() => {
      dispatch(decrement({ count: ranNum }));
    }, 2000);
  };
};

export const asyncPlusRandom = () => {
  return async (dispatch) => {
    let ranNum = Math.floor(Math.random() * 10 + 1);
    setTimeout(() => {
      dispatch(increment({ count: ranNum }));
    }, 2000);
  };
};

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
