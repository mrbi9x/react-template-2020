import { Typography } from "@material-ui/core";
import React from "react";
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
