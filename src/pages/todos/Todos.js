import { Paper, Typography, Container } from "@material-ui/core";
import React from "react";
import TodoList from "./TodoList";
import TodoNew from "./TodoNew";

const Todos = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Paper>
          <Typography variant="h5" color="initial" align="center">
            Todos
          </Typography>
          <TodoNew />
          <TodoList />
        </Paper>
      </Container>
    </>
  );
};

export default Todos;
