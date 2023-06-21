import type { TApiGetWeatherResponse, TServiceNetwork } from './modelApi';

/*
 * Service responsible for exposing api methods related to /weather CRUD
 */

function createServiceWeather(networkService: TServiceNetwork) {
  const getWeather = (): Promise<TApiGetWeatherResponse> => {
    return networkService.request<TApiGetWeatherResponse>({
      method: 'GET',
      url: '/weather',
    });
  };

  return {
    getWeather,
  };
}

export default createServiceWeather;
