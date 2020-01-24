export const API_BASE_URL = "http://openweathermap.org/data/2.5/weather";

export const weatherAPI = {
  search: async query => {
    const response = await fetch(`${API_BASE_URL}?q=${query}&appid=b6907d289e10d714a6e88b30761fae22`);
    return await response.json().then(data => data);
  }
};