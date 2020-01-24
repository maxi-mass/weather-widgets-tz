import {
  ADD,
  REMOVE,
  RETURN_FROM_REMOVED,
  UPDATE,
  LIFT_UP,
  LOWER_DOWN
} from "../types";

const initialState = {
  cart: [],
  goods: [],
  cartTotal: 0,
  sumTotal: 0
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return state;
    }
    case REMOVE: {
      return state;
    }
    case RETURN_FROM_REMOVED: {
      return state;
    }
    case UPDATE: {
      return state;
    }
    case LIFT_UP: {
      return state;
    }
    case LOWER_DOWN: {
      return state;
    }
    default:
      return state;
  }
};
