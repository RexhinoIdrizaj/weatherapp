import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
export * from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn().mockResolvedValueOnce(null),
    getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
  };
});

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
