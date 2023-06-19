import type { TApiGetWeatherResponse, TServiceNetwork } from './modelApi';

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
