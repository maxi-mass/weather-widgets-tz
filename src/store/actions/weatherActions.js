import {
  ADD,
  REMOVE,
  RETURN_FROM_REMOVED,
  UPDATE,
  LIFT_UP,
  LOWER_DOWN,
  SET_MESSAGE
} from "../types";
import { weatherAPI } from "../../api";

export const addCity = query => async dispatch => {
  try {
    const response = await weatherAPI.search(query);

    dispatch({
      type: ADD,
      payload: {
        id: response.id,
        name: response.name,
        temp: response.main.temp,
        status: "active",
        ix: 0
      }
    });
    dispatch({
      type: SET_MESSAGE,
      payload: ""
    });
  } catch (err) {
    dispatch({
      type: SET_MESSAGE,
      payload: `По запросу "${query}" ничего не найдено`
    });
  }
};

export const remove = id => dispatch => {
  dispatch({ type: REMOVE, payload: id });
};

export const returnFromRemoved = id => dispatch => {
  dispatch({ type: RETURN_FROM_REMOVED, payload: id });
};

export const up = id => dispatch => {
  dispatch({ type: LIFT_UP, payload: id });
};

export const down = id => dispatch => {
  dispatch({ type: LOWER_DOWN, payload: id });
};

export const update = payload => dispatch => {
  dispatch({ type: UPDATE, payload });
};
