import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const { count } = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();
  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

export default Counter;
