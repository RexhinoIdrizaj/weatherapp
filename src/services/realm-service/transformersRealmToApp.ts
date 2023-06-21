import { TAppCitiesData, TAppCityWeatherData } from '../../models';

/*
 * This transformers are needed to not directly expose Realm objects
 */

const transformCityWeatherRealmToApp = (
  cityWeatherDataRealm: TAppCityWeatherData,
): TAppCityWeatherData => {
  return {
    date: cityWeatherDataRealm.date,
    formattedDate: cityWeatherDataRealm.formattedDate,
    wantedTemp: cityWeatherDataRealm.wantedTemp,
    wantedTempType: cityWeatherDataRealm.wantedTempType,
  };
};

export const transformCityRealmToApp = (
  cityRealm: TAppCitiesData & Realm.Object<unknown, never>,
): TAppCitiesData => {
  return {
    cityName: cityRealm.cityName,
    cityPicture: cityRealm.cityPicture,
    cityWeatherData: cityRealm.cityWeatherData.map(
      transformCityWeatherRealmToApp,
    ),
  };
};
