import { createSelector } from '@reduxjs/toolkit';
import { entityAdapterCities } from '../entityAdapters';

import { getWeather } from '../reducers';
import * as fromReducer from '../reducers/reducerWeather';

export const selectLoadingCities = createSelector(
  getWeather,
  fromReducer.getLoadingCities,
);

/*
 * ADAPTER SELECTORS
 */
export const selectCitiesAdapter = createSelector(
  getWeather,
  fromReducer.getCitiesDataAdapter,
);

const entityAdaptersSelectors = entityAdapterCities.getSelectors();

export const selectCitiesList = createSelector(
  selectCitiesAdapter,
  entityAdaptersSelectors.selectAll,
);
export const selectCity = createSelector(
  selectCitiesAdapter,
  state => (id: string) => {
    return entityAdaptersSelectors.selectById(state, id);
  },
);
