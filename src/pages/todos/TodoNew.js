import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

function TodoNew() {
  const [todoContent, setTodoContent] = useState("");
  const dispatch = useDispatch();

  function handlerAddTodo(e) {
    e.preventDefault();
    if (!todoContent) {
      return;
    }
    dispatch(addTodo(todoContent));
    setTodoContent("");
  }

  return (
    <form noValidate onSubmit={(e) => handlerAddTodo(e)}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Grid item sm={8}>
          <TextField
            fullWidth
            id="todo-new"
            label="New todo"
            variant="outlined"
            value={todoContent}
            size="small"
            autoComplete="false"
            onChange={(e) => setTodoContent(e.target.value)}
          />
        </Grid>
        <Grid item sm={4}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<Add />}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TodoNew;
