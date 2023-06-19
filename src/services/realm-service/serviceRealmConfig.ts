import Realm from 'realm';
import { CitySchema, CityWeatherDataSchema } from './schemasRealm';

const createRealmInstance = () => {
  try {
    const realmInstance = new Realm({
      schema: [CitySchema, CityWeatherDataSchema],
      schemaVersion: 1,
      deleteRealmIfMigrationNeeded: true,
      // migration: (oldRealm, newRealm) => {
      //   // only apply this change if upgrading to schemaVersion 2
      //   if (oldRealm.schemaVersion < 2) {
      //     const oldObjects = oldRealm.objects('Person');
      //     const newObjects = newRealm.objects('Person');
      //     // loop through all objects and set the fullName property in the new schema
      //     for (const objectIndex in oldObjects) {
      //       const oldObject = oldObjects[objectIndex];
      //       const newObject = newObjects[objectIndex];
      //       newObject.fullName = `${oldObject.firstName} ${oldObject.lastName}`;
      //     }
      //   }
      // }
    });
    // console.log(
    //   '🚀 ~ file: serviceRealmConfig.ts:24 ~ createRealmInstance ~ realmInstance:',
    //   realmInstance,
    // );
    // console.log('realm path', realmInstance.path);
    return realmInstance;
  } catch (error) {
    console.log('error creating instance', error);
  }
};

export default createRealmInstance;
