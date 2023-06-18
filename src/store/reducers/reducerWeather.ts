import { createSlice } from '@reduxjs/toolkit';

import { entityAdapterCities } from '../entityAdapters';
import { actionWeather } from '../actions';
import { thunkWeather } from '../thunks';

export interface TStateWeather {
  loading: boolean;
  citiesData: ReturnType<typeof entityAdapterCities.getInitialState>;
}

const initialState: TStateWeather = {
  citiesData: entityAdapterCities.getInitialState(),
  loading: false,
};

export const weatherSlice = createSlice({
  name: actionWeather.reducerWeatherName,
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
        state.citiesData = entityAdapterCities.setAll(
          state.citiesData,
          sortedData,
        );
      },
    );
  },
});

export const getLoadingCities = (state: TStateWeather) => state.loading;
export const getCitiesDataAdapter = (state: TStateWeather) => state.citiesData;

export default weatherSlice.reducer;
