import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TErrorResponse, TNullable } from '../../services';
import {
  AnyAsyncThunk,
  RejectedActionFromAsyncThunk,
} from '@reduxjs/toolkit/dist/matchers';
import { SerializedError } from '@reduxjs/toolkit/dist/createAsyncThunk';
// import { TSlicesNames } from '../configStore';

export interface TStateErrors {
  networkError: TNullable<TErrorResponse>;
}

const initialState: TStateErrors = {
  networkError: null,
};

export const errorSlice = createSlice({
  name: 'errors',
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
        console.log('🚀 ~ file: reducerErrors.ts:33 ~ payload:', error);

        state.networkError = error;
      },
    );
  },
});
export const { setNetworkError, removeNetworkError } = errorSlice.actions;

export const getNetworkError = (state: TStateErrors) => state.networkError;

export default errorSlice.reducer;
