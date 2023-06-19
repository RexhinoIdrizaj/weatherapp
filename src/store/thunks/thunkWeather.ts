import { createAsyncThunk } from '@reduxjs/toolkit';

import { actionWeather } from '../actions';
import {
  apiRealm,
  apiWeather,
  transformGetWeatherResToAppData,
} from '../../api';

const fetchWeatherData = createAsyncThunk(
  actionWeather.fetchWeatherDataRequested,
  async (_, thunkApi) => {
    const isOnline = false; //TODO: change when implementing internet connection logic
    if (!isOnline && apiRealm) {
      const offlineData = apiRealm.getWeatherRealm();
      return offlineData;
    }
    if (thunkApi?.signal) apiWeather.cancelRequest();
    const response = await apiWeather.getWeather();
    const onlineData = transformGetWeatherResToAppData(response);
    if (onlineData) {
      const el0 = onlineData[0];
      const el1 = onlineData[1];
      apiRealm?.saveWeatherRealm([el0, el1]);
    }
    return onlineData;
  },
);

export default {
  fetchWeatherData,
};
