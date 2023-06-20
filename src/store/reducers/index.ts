import reducerWeather, { TStateWeather } from './reducerWeather';
import reducerSettings, { TStateSettings } from './reducerSettings';
import reducerErrors, { TStateErrors } from './reducerErrors';

export interface TRootReducer {
  weather: TStateWeather;
  settings: TStateSettings;
  errors: TStateErrors;
}

export default {
  weather: reducerWeather,
  settings: reducerSettings,
  errors: reducerErrors,
};

export const getWeather = (state: TRootReducer) => state.weather;
export const getSettings = (state: TRootReducer) => state.settings;
export const getErrors = (state: TRootReducer) => state.errors;

export * from './reducerSettings';
