import ServiceNetwork from './serviceNetwork';
import type { TApiGetWeatherResponse } from './modelApi';

class ServiceWeather {
  protected networkService: ServiceNetwork;

  constructor(networkService: ServiceNetwork) {
    this.networkService = networkService;
  }
  getWeather(): Promise<TApiGetWeatherResponse> {
    return this.networkService.request<TApiGetWeatherResponse>({
      method: 'GET',
      url: '/weather', //TODO: move this to an enum
    });
  }

  // ... other  methods
}

export default ServiceWeather;
