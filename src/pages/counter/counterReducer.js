import { COUNTER_ACTION } from "../../utils/action-type";

const INTIAL_COUNT_STATE = {
  count: 0,
};

const counter = (state = INTIAL_COUNT_STATE, action) => {
  switch (action.type) {
    case COUNTER_ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case COUNTER_ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case COUNTER_ACTION.RESET:
      return INTIAL_COUNT_STATE;
    default:
      return state;
  }
};

export default counter;
