import { Typography } from "@material-ui/core";
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
import TodoNew from "./TodoNew";

const Todos = () => {
  return (
    <>
      <Typography variant="h5" color="initial" align="center">
        Todos
      </Typography>
      <TodoNew />
      <TodoList />
    </>
  );
};

export default Todos;
