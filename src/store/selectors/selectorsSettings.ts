import { createSelector } from '@reduxjs/toolkit';

import { getSettings } from '../reducers';
import * as fromReducer from '../reducers/reducerSettings';

export const selectIsConnected = createSelector(
  getSettings,
  fromReducer.getIsConnected,
);
