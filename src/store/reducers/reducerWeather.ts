import { createSlice } from '@reduxjs/toolkit';

import { entityAdapterCities } from '../entityAdapters';
import { thunkWeather } from '../thunks';
import { TErrorResponse } from '../../services';
import { TNullable } from '../../models';
// import { TSlicesNames } from '../configStore';

export interface TStateWeather {
  loading: boolean;
  error: TNullable<TErrorResponse>;
  citiesData: ReturnType<typeof entityAdapterCities.getInitialState>;
}

const initialState: TStateWeather = {
  citiesData: entityAdapterCities.getInitialState(),
  error: null,
  loading: false,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(thunkWeather.fetchWeatherData.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      thunkWeather.fetchWeatherData.fulfilled,
      (state, { payload }) => {
        const sortedData = payload.sort((a, b) =>
          a.cityName.localeCompare(b.cityName),
        );
        state.loading = false;
        state.citiesData = entityAdapterCities.setAll(
          state.citiesData,
          sortedData,
        );
      },
    );
    builder.addCase(thunkWeather.fetchWeatherData.rejected, (state, action) => {
      console.log(
        '🚀 ~ file: reducerWeather.ts:39 ~ builder.addCase ~ action:',
        action,
      );
      state.error = action.error;
      state.loading = false;
    });
  },
});

export const getLoadingCities = (state: TStateWeather) => state.loading;
export const getErrorWeatherApi = (state: TStateWeather) => state.error;
export const getCitiesDataAdapter = (state: TStateWeather) => state.citiesData;

export default weatherSlice.reducer;
