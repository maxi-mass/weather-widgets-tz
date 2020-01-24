import {
  ADD,
  REMOVE,
  RETURN_FROM_REMOVED,
  UPDATE,
  LIFT_UP,
  LOWER_DOWN
} from "../types";

const initialState = {
  data: {
    all: [
      { name: 'Moscow', id: 524901, temp: -4.06, status: 'active' },
      { name: "Saratov", id: 498677, temp: -6.67, status: 'deleted' }
    ],
    active: [
      { name: 'Moscow', id: 524901, temp: -4.06, status: 'active' }
    ],
    deleted: [
      { name: "Saratov", id: 498677, temp: -6.67, status: 'deleted' }
    ]
  },
  message: 'По данному запросу ничего не найдено'
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
