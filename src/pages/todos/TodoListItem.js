import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { toggleTodo, removeTodo } from "./todoSlice";

function TodoListItem(props) {
  const todo = useSelector((state) => state.todos[props.idx]);
  const dispatch = useDispatch();

  function handlerToggleTodo(id) {
    dispatch(toggleTodo({ id }));
  }
  return (
    <ListItem button>
      <Checkbox
        value={todo?.isComplite}
        checked={todo?.isComplite}
        onChange={() => handlerToggleTodo(props.id)}
        color="primary"
      />
      <ListItemText primary={todo.content}></ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={() => dispatch(removeTodo({ id: props.id }))}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoListItem;
