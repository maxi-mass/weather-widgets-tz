import {
  ADD,
  REMOVE,
  RETURN_FROM_REMOVED,
  UPDATE,
  LIFT_UP,
  LOWER_DOWN,
  SET_MESSAGE
} from "../types";
import { weatherAPI } from '../../api';

export const addCity = query => async dispatch => {
  try {
    const response = await weatherAPI.search(query);
    const city = {
      id: response.id,
      name: response.name,
      temp: response.main.temp,
      status: 'active'
    }

    dispatch({ type: ADD, payload: city });
  } catch (err) {
    dispatch({ type: SET_MESSAGE, payload: `По запросу "${query}" ничего не найдено` })
  }
};