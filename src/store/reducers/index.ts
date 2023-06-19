import reducerWeather, { TStateWeather } from './reducerWeather';
import reducerSettings, { TStateSettings } from './reducerSettings';

export interface TRootReducer {
  weather: TStateWeather;
  settings: TStateSettings;
}

export default {
  weather: reducerWeather,
  settings: reducerSettings,
};

export const getWeather = (state: TRootReducer) => state.weather;
export const getSettings = (state: TRootReducer) => state.settings;

export * from './reducerSettings';
