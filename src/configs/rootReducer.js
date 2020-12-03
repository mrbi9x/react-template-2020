import { combineReducers } from "redux";
import counter from "../pages/counter/couterSlice";
import todos from "../pages/todos/todoSlice";
import posts from "../pages/posts/postsSlice";

const rootReducer = combineReducers({
  counter,
  todos,
  posts,
});

export default rootReducer;
