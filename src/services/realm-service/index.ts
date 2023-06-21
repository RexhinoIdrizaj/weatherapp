import createRealmInstance from './serviceRealmConfig';
import createServiceWeatherRealm from './serviceWeatherRealm';

function createRealmAPi() {
  const realmInstance = createRealmInstance();
  if (!realmInstance) return;

  // Here the api that is needed to be exposed
  const weatherServiceRealm = createServiceWeatherRealm(realmInstance);

  return {
    ...weatherServiceRealm,
    // more services if needed.
  };
}

export default createRealmAPi;
