import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TNullable } from '../../services';
// import { TSlicesNames } from '../configStore';

export interface TStateSettings {
  isConnected: TNullable<boolean>;
}

const initialState: TStateSettings = {
  isConnected: null,
};

export const settingsSlice = createSlice({
  name: 'settings',
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
