import {
  ADD,
  REMOVE,
  RETURN_FROM_REMOVED,
  UPDATE,
  LIFT_UP,
  LOWER_DOWN,
  SET_MESSAGE
} from "../types";

const initialState = {
  data: {
    all: [],
    active: [],
    deleted: []
  },
  message: ''
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        data: {
          ...state.data,
          all: [
            ...state.data.all.filter(item => item.id !== action.payload.id),
            { ...action.payload, ix: state.data.all.length + 1 },
          ],
          active: [
            ...state.data.active.filter(item => item.id !== action.payload.id),
            { ...action.payload, ix: state.data.active.length + 1 },
          ]
        }
      }
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
    case SET_MESSAGE: {
      return {
        ...state,
        message: action.payload
      }
    }
    default:
      return state;
  }
};
