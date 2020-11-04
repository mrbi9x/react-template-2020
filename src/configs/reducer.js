import { combineReducers } from "redux";

const INTIAL_COUNT_STATE = {
  count: 0,
};

const countReducer = (state = INTIAL_COUNT_STATE, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return INTIAL_COUNT_STATE;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  countReducer,
});

export default rootReducer;
