import { TGetWeatherResponse } from './modelApi';
import ServiceNetwork from './serviceNetwork';

class ServiceWeather {
  protected networkService: ServiceNetwork;

  constructor(networkService: ServiceNetwork) {
    this.networkService = networkService;
  }
  getWeather(): Promise<TGetWeatherResponse> {
    return this.networkService.request<TGetWeatherResponse>('GET', '/weather');
  }

  // ... other  methods
}

export default ServiceWeather;
