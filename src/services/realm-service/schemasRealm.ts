import { ERealmEmbeddedObjectNames, ERealmObjectNames } from './modelRealm';

export const CitySchema = {
  name: ERealmObjectNames.City,
  primaryKey: 'cityName',
  properties: {
    cityName: 'string',
    cityPicture: 'string',
    cityWeatherData: {
      type: 'list',
      objectType: ERealmEmbeddedObjectNames.CityWeatherData,
      default: [],
    },
  },
};

/*
 *  EMBEDDED schemas
 */
export const CityWeatherDataSchema = {
  name: ERealmEmbeddedObjectNames.CityWeatherData,
  properties: {
    date: 'string',
    formattedDate: 'string',
    wantedTemp: 'int',
    wantedTempType: 'string',
  },
};
