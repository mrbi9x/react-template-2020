import React, { useState } from "react";
import { IconButton, Input, makeStyles } from "@material-ui/core";
import { Undo, Edit } from "@material-ui/icons";
import { updateTodo } from "./todoSlice";
import { useDispatch } from "react-redux";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginRight: theme.spacing(4),
    justifyContent: "space-around",
    " & > * ": {
      marginRight: theme.spacing(2),
    },
  },
  autoFlexGrow: {
    flex: 1,
  },
}));

const TodoEditor = ({ id, content, handlerToggleEdit }) => {
  const classes = useStyle();
  const [value, setValue] = useState(content);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const handlerValueChange = (e) => {
    e.target.value ? setIsError(false) : setIsError(true);
    setValue(e.target.value);
  };
  const handlerUpdateTodo = (e) => {
    e.preventDefault();
    if (!value) {
      setIsError(true);
      return;
    }
    dispatch(updateTodo({ id, value }));
    handlerToggleEdit(e);
  };
  return (
    <form
      className={classes.root}
      onSubmit={handlerUpdateTodo}
      noValidate
      autoComplete="off"
    >
      <Input
        className={classes.autoFlexGrow}
        multiline
        rowsMax={3}
        fullWidth
        autoFocus
        error={isError}
        value={value}
        onChange={handlerValueChange}
      />
      <IconButton
        aria-label="Update"
        color="primary"
        size="small"
        type="submit"
      >
        <Edit />
      </IconButton>
      <IconButton
        aria-label="Cancel"
        onClick={handlerToggleEdit}
        color="primary"
        size="small"
      >
        <Undo />
      </IconButton>
    </form>
  );
};

export default TodoEditor;
