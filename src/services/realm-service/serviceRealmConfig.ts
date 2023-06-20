import Realm from 'realm';
import { CitySchema, CityWeatherDataSchema } from './schemasRealm';

const createRealmInstance = () => {
  try {
    const realmInstance = new Realm({
      schema: [CitySchema, CityWeatherDataSchema],
      schemaVersion: 1,
      deleteRealmIfMigrationNeeded: true,
    });
    return realmInstance;
  } catch (error) {
    console.log('error creating instance', error);
  }
};

export default createRealmInstance;
