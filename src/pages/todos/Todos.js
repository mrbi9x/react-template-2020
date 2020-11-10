import React from "react";
// import {
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
// } from "@material-ui/core";
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo, removeTodo, toggleTodo } from "./todoSlice";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <>
      <h3>Todos</h3>
      <TodoList />
    </>
  );
};

export default Todos;
