import { combineReducers } from "redux";
import counter from "../pages/counter/couterSlice";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
