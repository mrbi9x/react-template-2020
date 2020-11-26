import React, { useState } from "react";
import { IconButton, Input } from "@material-ui/core";
import { Save, Undo } from "@material-ui/icons";
import { updateTodo } from "./todoSlice";
import { useDispatch } from "react-redux";

const TodoEditor = ({ id, content, handlerToggleEdit }) => {
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
    <form width="100%" onSubmit={handlerUpdateTodo}>
      <Input
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
        <Save />
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
