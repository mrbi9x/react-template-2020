import { combineReducers } from "redux";
import counter from "../pages/counter/counterReducer";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
