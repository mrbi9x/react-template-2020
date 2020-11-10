import React from "react";
import { useSelector } from "react-redux";
import { List } from "@material-ui/core";
import TodoListItem from "./TodoListItem";
import { todosSelector } from "./todoSlice";

function TodoList() {
  const todos = useSelector(todosSelector);
  return (
    <>
      <List>
        {todos &&
          todos.map((todo, idx) => {
            return <TodoListItem key={todo.id} id={todo.id} idx={idx} />;
          })}
      </List>
    </>
  );
}

export default TodoList;
