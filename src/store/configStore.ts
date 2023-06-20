import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import rootReducer from './reducers';

export const combinedRootReducer = combineReducers(rootReducer);

export const store = configureStore({
  reducer: combinedRootReducer,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
// export enum TSlicesNames {
//   weather = 'weather',
//   settings = 'settings',
// }

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
