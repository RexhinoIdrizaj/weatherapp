import { CreateAxiosDefaults } from 'axios';

import createServiceNetwork from './serviceNetwork';
import createServiceWeather from './serviceWeather';
import { TUnifiedApi } from './modelApi';

/*
 * Wrapper to return multiple methods from multiple services if there are more than one in the future
 * One place to pass the config and for network layer.
 */
function createUnifiedAPI(config: CreateAxiosDefaults): TUnifiedApi {
  const networkService = createServiceNetwork(config);

  // Here the api that is needed to be exposed
  const weatherService = createServiceWeather(networkService);

  const unifiedAPI = {
    ...weatherService,
    cancelRequest: networkService.cancelRequest,
    // more services if needed.
  };

  return unifiedAPI;
}

export default createUnifiedAPI;
