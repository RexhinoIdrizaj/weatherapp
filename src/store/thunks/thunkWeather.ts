import { createAsyncThunk } from '@reduxjs/toolkit';
import FastImage from 'react-native-fast-image';

import { actionWeather } from '../actions';
import {
  apiRealm,
  apiWeather,
  transformGetWeatherResToAppData,
} from '../../api';
import { TRootState } from '../configStore';

const fetchWeatherData = createAsyncThunk(
  actionWeather.fetchWeatherDataRequested,
  async (_, { signal, getState }) => {
    const state = getState() as TRootState;
    const isConnected = state.settings.isConnected;

    if (!isConnected && apiRealm) {
      const offlineData = apiRealm.getWeatherRealm();
      return offlineData;
    }
    if (signal) apiWeather.cancelRequest();
    const response = await apiWeather.getWeather();
    const onlineData = transformGetWeatherResToAppData(response);
    if (onlineData) {
      try {
        apiRealm?.saveWeatherRealm(onlineData);
      } catch (error) {
        console.log('error', error);
      }
      const imagesToSave = onlineData.map(el => ({ uri: el.cityPicture }));
      FastImage.preload(imagesToSave);
    }
    return onlineData;
  },
);

export default {
  fetchWeatherData,
};
