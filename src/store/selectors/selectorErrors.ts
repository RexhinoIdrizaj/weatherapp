import { createSelector } from '@reduxjs/toolkit';

import { getErrors } from '../reducers';
import * as fromReducer from '../reducers/reducerErrors';

export const selectNetworkError = createSelector(
  getErrors,
  fromReducer.getNetworkError,
);
