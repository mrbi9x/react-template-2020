import { combineReducers } from "redux";
import counter from "../pages/counter/couterSlice";
import todos from "../pages/todos/todoSlice";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
