import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Checkbox,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { toggleTodo, removeTodo } from "./todoSlice";
import TodoEditor from "./TodoEditor";

const useStyle = makeStyles({
  root: {
    display: "flex",
  },
  autoFlexGrow: {
    flex: 1,
    marginRight: "4rem",
  },
});

const TodoListItem = (props) => {
  const todo = useSelector((state) => state.todos[props.idx]);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const classes = useStyle();

  function handlerToggleTodo(e, id) {
    dispatch(toggleTodo({ id }));
  }

  const handlerToggleEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };
  return (
    <ListItem className={classes.root}>
      <Checkbox
        value={todo?.isComplite}
        checked={todo?.isComplite}
        onChange={(e) => handlerToggleTodo(e, props.id)}
        color="primary"
      />
      {isEdit ? (
        <TodoEditor
          id={todo.id}
          content={todo.content}
          handlerToggleEdit={handlerToggleEdit}
        />
      ) : (
        // <ListItemText
        //   primary={todo.content}
        //   onClick={(e) => handlerToggleEdit(e)}
        // />
        <Typography
          className={classes.autoFlexGrow}
          variant="inherit"
          color="initial"
          onClick={(e) => handlerToggleEdit(e)}
          noWrap
        >
          {todo.content}
        </Typography>
      )}

      <ListItemSecondaryAction>
        <IconButton onClick={() => dispatch(removeTodo({ id: props.id }))}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoListItem;
