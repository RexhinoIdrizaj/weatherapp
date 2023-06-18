import { createAsyncThunk } from '@reduxjs/toolkit';

import { actionWeather } from '../actions';
import { api, transformGetWeatherResToAppData } from '../../api';

const fetchWeatherData = createAsyncThunk(
  actionWeather.fetchWeatherDataRequested,
  async (_, thunkApi) => {
    // if (thunkApi?.signal) api.cancelRequest();
    const response = await api.getWeather();
    const wantedData = transformGetWeatherResToAppData(response);
    console.log('wantedData', wantedData);
    return wantedData;
  },
);

export default {
  fetchWeatherData,
};
