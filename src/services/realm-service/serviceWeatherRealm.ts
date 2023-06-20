import { TAppCitiesData } from '../../models';
import { ERealmObjectNames } from './modelRealm';
import { transformCityRealmToApp } from './transformersRealmToApp';

const createServiceWeatherRealm = (realmInstance: Realm) => {
  const saveWeatherRealm = (weatherData: TAppCitiesData[]) => {
    realmInstance.write(() => {
      weatherData.forEach(el => {
        realmInstance.create(
          ERealmObjectNames.City,
          el,
          Realm.UpdateMode.Modified,
        );
      });
    });
  };
  const getWeatherRealm = () => {
    const cities = realmInstance.objects<TAppCitiesData>(
      ERealmObjectNames.City,
    );

    return cities.map(transformCityRealmToApp);
  };

  return {
    saveWeatherRealm,
    getWeatherRealm,
  };
};

export default createServiceWeatherRealm;
