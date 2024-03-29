import React from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { FC, PropsWithChildren, useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { useAppDispatch, useAppSelector } from '../store';
import { setConnectionStatus } from '../store/reducers';

const ProviderConnection: FC<PropsWithChildren> = ({ children }) => {
  const netInfo = useNetInfo();
  const dispatch = useAppDispatch();
  const isConnected = useAppSelector(state => state.settings.isConnected);

  useEffect(() => {
    const isConnected = netInfo.isConnected && netInfo.isInternetReachable;
    if (netInfo.isConnected !== null && netInfo.isInternetReachable !== null)
      dispatch(setConnectionStatus(!!isConnected));
  }, [dispatch, netInfo.isConnected, netInfo.isInternetReachable]);

  useEffect(() => {
    if (isConnected !== null) RNBootSplash.hide();
  }, [isConnected]);

  return isConnected !== null ? <>{children}</> : null;
};

export default ProviderConnection;
