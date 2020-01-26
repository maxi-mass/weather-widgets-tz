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
  data: [],
  message: ""
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const filteredData = state.data.filter(
        item => item.id !== action.payload.id
      );
      return {
        ...state,
        data: [
          action.payload,
          ...filteredData.map(item => {
            item.ix++;
            return item;
          })
        ]
      };
    }
    case REMOVE: {
      return {
        ...state,
        data: state.data.map(item => {
          if (item.id === action.payload) {
            item.status = "deleted";
          }
          return item;
        })
      };
    }

    case RETURN_FROM_REMOVED: {
      return {
        ...state,
        data: state.data.map(item => {
          if (item.id === action.payload) {
            item.status = "active";
          }
          return item;
        })
      };
    }

    case UPDATE: {
      return {
        ...state,
        data: state.data.map(item => {
          if (item.id === action.payload.id) {
            item.name = action.payload.name;
            item.temp = action.payload.temp;
          }
          return item;
        })
      };
    }

    case LIFT_UP: {
      if (action.payload.ix === 0) return state;
      const prevItem = state.data.find(
        item => item.ix === action.payload.ix - 1
      );
      const prevId = prevItem.id;

      return {
        ...state,
        data: state.data.map(item => {
          if (item.id === action.payload.id) {
            item.ix--;
          }
          if (item.id === prevId) {
            item.ix++;
          }
          return item;
        })
      };
    }
    case LOWER_DOWN: {
      if (action.payload.ix === state.data.length - 1) return state;
      const nextItem = state.data.find(
        item => item.ix === action.payload.ix + 1
      );
      const nextId = nextItem.id;
      return {
        ...state,
        data: state.data.map(item => {
          if (item.id === action.payload.id) {
            item.ix++;
          }
          if (item.id === nextId) {
            item.ix--;
          }
          return item;
        })
      };
    }
    case SET_MESSAGE: {
      return {
        ...state,
        message: action.payload
      };
    }
    default:
      return state;
  }
};
