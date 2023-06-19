import { createAsyncThunk } from '@reduxjs/toolkit';
import FastImage from 'react-native-fast-image';

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
      apiRealm?.saveWeatherRealm(onlineData);
      const imagesToSave = onlineData.map(el => ({ uri: el.cityPicture }));
      FastImage.preload(imagesToSave);
    }
    return onlineData;
  },
);

export default {
  fetchWeatherData,
};
