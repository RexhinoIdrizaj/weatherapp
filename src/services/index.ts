import ServiceWeather from './serviceWeather';
import ServiceNetwork from './serviceNetwork';

interface UnifiedAPI
  extends ServiceWeather,
    Pick<ServiceNetwork, 'cancelRequest'> {}
/*
 * Wrapper to return multiple methods from multiple services if there are more than one in the future
 * One place to pass the config and for network layer.
 */
function createUnifiedAPI(baseURL: string): UnifiedAPI {
  const networkService = new ServiceNetwork(baseURL);

  // Here the api that is needed to be exposed
  const weatherService = new ServiceWeather(networkService);

  const unifiedAPI = {
    ...weatherService,
    cancelRequest: networkService.cancelRequest,
    // more services if needed.
  } as UnifiedAPI;

  return unifiedAPI;
}

export default createUnifiedAPI;
