import { createEntityAdapter } from '@reduxjs/toolkit';

import { TAppCitiesData } from '../../models';

export const entityAdapterCities = createEntityAdapter<TAppCitiesData>({
  selectId: model => model.cityName,
  sortComparer: (a, b) => a.cityName.localeCompare(b.cityName),
});
