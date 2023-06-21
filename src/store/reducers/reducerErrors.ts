import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SerializedError } from '@reduxjs/toolkit/dist/createAsyncThunk';
import {
  AnyAsyncThunk,
  RejectedActionFromAsyncThunk,
} from '@reduxjs/toolkit/dist/matchers';

import { TErrorResponse, TNullable } from '../../services';
import { SliceNames } from '../../utils';

export interface TStateErrors {
  networkError: TNullable<TErrorResponse>;
}

const initialState: TStateErrors = {
  networkError: null,
};

export const errorSlice = createSlice({
  name: SliceNames.errors,
  initialState,
  reducers: {
    setNetworkError(
      state: TStateErrors,
      { payload }: PayloadAction<TErrorResponse>,
    ) {
      state.networkError = payload;
    },
    removeNetworkError(state: TStateErrors) {
      state.networkError = null;
    },
  },
  extraReducers: builder => {
    builder.addMatcher<RejectedActionFromAsyncThunk<AnyAsyncThunk>>(
      action => action.type.endsWith('/rejected'),
      (
        state: TStateErrors,
        { error }: PayloadAction<unknown, string, unknown, SerializedError>,
      ) => {
        state.networkError = error;
      },
    );
  },
});
export const { setNetworkError, removeNetworkError } = errorSlice.actions;

export const getNetworkError = (state: TStateErrors) => state.networkError;

export default errorSlice.reducer;
