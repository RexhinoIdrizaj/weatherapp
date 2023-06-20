import AsyncStorage from '@react-native-async-storage/async-storage';

import { storeDataToAsyncStorage } from '../asyncStorage';
import { TAsyncStorageKeys } from '../../models';

describe('AsyncStorage Helpers', () => {
  const key = TAsyncStorageKeys.LANGUAGE;
  const value = 'en';

  it('should store data to AsyncStorage', async () => {
    const mockSetItem = jest.spyOn(AsyncStorage, 'setItem');
    mockSetItem.mockResolvedValueOnce();

    await storeDataToAsyncStorage(key, value);

    expect(mockSetItem).toHaveBeenCalledWith(key, JSON.stringify(value));
    mockSetItem.mockRestore();
  });
});
