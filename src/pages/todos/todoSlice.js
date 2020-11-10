import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [
  {
    id: 1,
    content: "test todo 01",
    isComplite: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
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

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
