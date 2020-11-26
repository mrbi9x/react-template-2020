import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const INITIAL_STATE = [];

const todosSlice = createSlice({
  name: "todos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (newContent) => {
        let newTodoId = uuid();
        return {
          payload: {
            id: newTodoId,
            content: newContent,
            isComplite: false,
          },
        };
      },
    },
    updateTodo(state, action) {
      let updateTodo = state.find((todo) => todo.id === action.payload.id);
      if (updateTodo && action.payload?.value) {
        updateTodo.content = action.payload?.value;
      }
    },
    removeTodo(state, action) {
      let idx = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(idx, 1);
    },
    toggleTodo(state, action) {
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          return (todo.isComplite = !todo.isComplite);
        }
        return todo;
      });
    },
  },
});

export const todosSelector = (state) => state.todos;

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  updateTodo,
} = todosSlice.actions;
export default todosSlice.reducer;
