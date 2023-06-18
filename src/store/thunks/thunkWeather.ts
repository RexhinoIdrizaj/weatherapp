import { createAsyncThunk } from '@reduxjs/toolkit';

import { actionWeather } from '../actions';
import { apiWeather, transformGetWeatherResToAppData } from '../../api';

const fetchWeatherData = createAsyncThunk(
  actionWeather.fetchWeatherDataRequested,
  async (_, thunkApi) => {
    if (thunkApi?.signal) apiWeather.cancelRequest();
    const response = await apiWeather.getWeather();
    const wantedData = transformGetWeatherResToAppData(response);
    console.log('wantedData', wantedData);
    return wantedData;
  },
);

export default {
  fetchWeatherData,
};
