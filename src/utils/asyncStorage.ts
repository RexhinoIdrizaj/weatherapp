import AsyncStorage from '@react-native-async-storage/async-storage';
import { EAsyncStorageKeys } from '../models';

export const storeDataToAsyncStorage = async (
  key: EAsyncStorageKeys,
  value: unknown,
) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(`error storing data on asyncstorage ${key}`, e);
  }
};

export const mergeDataToAsyncStorage = async (
  key: EAsyncStorageKeys,
  value: unknown,
) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.mergeItem(key, jsonValue);
  } catch (e) {
    console.log(`error merging data on asyncstorage ${key}`, e);
  }
};

export const getDataFromAsyncStorage = async (key: EAsyncStorageKeys) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(`error getting data from asyncstorage key: ${key}`, e);
  }
};

export const getMultiDataFromAsyncStorage = async (
  keys: EAsyncStorageKeys[],
) => {
  try {
    const jsonValues = await AsyncStorage.multiGet(keys);
    const wantedValues: Record<string, any> = jsonValues.reduce(
      (accumulator, currentValue) => {
        return {
          ...accumulator,
          [currentValue[0]]: currentValue[1]
            ? JSON.parse(currentValue[1])
            : null,
        };
      },
      {},
    );

    return wantedValues;
  } catch (e) {
    console.log(`error getMultiDataFromAsyncStorage keys: ${keys}`, e);
  }
};

export const removeDataFromAsyncStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
    console.log(`error removing data from asyncstorage key: ${key}`, e);
  }
};

export const clearAllFromAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log('error removing all data from asyncstorage', e);
  }
};
