import reducerWeather, { TStateWeather } from './reducerWeather';

export interface TRootReducer {
  weather: TStateWeather;
}

export default {
  weather: reducerWeather,
};

export const getWeather = (state: TRootReducer) => state.weather;
