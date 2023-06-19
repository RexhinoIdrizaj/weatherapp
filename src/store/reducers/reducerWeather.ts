import { createSlice } from '@reduxjs/toolkit';

import { entityAdapterCities } from '../entityAdapters';
import { thunkWeather } from '../thunks';
// import { TSlicesNames } from '../configStore';

export interface TStateWeather {
  loading: boolean;
  citiesData: ReturnType<typeof entityAdapterCities.getInitialState>;
}

const initialState: TStateWeather = {
  citiesData: entityAdapterCities.getInitialState(),
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
  },
});

export const getLoadingCities = (state: TStateWeather) => state.loading;
export const getCitiesDataAdapter = (state: TStateWeather) => state.citiesData;

export default weatherSlice.reducer;
