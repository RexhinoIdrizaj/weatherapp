import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TNullable } from '../../services';
import { SliceNames } from '../../utils';

export interface TStateSettings {
  isConnected: TNullable<boolean>;
}

const initialState: TStateSettings = {
  isConnected: null,
};

export const settingsSlice = createSlice({
  name: SliceNames.settings,
  initialState,
  reducers: {
    setConnectionStatus(
      state: TStateSettings,
      { payload }: PayloadAction<boolean>,
    ) {
      state.isConnected = payload;
    },
  },
});
export const { setConnectionStatus } = settingsSlice.actions;

export const getIsConnected = (state: TStateSettings) => state.isConnected;

export default settingsSlice.reducer;
