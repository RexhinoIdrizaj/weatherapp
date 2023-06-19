import { useNetInfo } from '@react-native-community/netinfo';
import { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { setConnectionStatus } from '../store/reducers';

const ProviderConnection = () => {
  const netInfo = useNetInfo();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isConnected = netInfo.isConnected && netInfo.isInternetReachable;

    dispatch(setConnectionStatus(!!isConnected));
  }, [dispatch, netInfo.isConnected, netInfo.isInternetReachable]);

  return null;
};

export default ProviderConnection;
