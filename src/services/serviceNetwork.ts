import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { TErrorResponse } from './modelApi';

class ServiceNetwork {
  protected axiosInstance: AxiosInstance;
  protected abortController: AbortController;

  constructor(baseURL: string) {
    // console.log('baseURL', baseURL);
    this.axiosInstance = axios.create({
      baseURL,
    });
    this.abortController = new AbortController();
  }

  async request<R>(config: AxiosRequestConfig): Promise<R> {
    try {
      const wantedConfig: AxiosRequestConfig = {
        ...config,
        signal: this.abortController.signal,
      };

      const response: AxiosResponse<R> = await this.axiosInstance.request<R>(
        wantedConfig,
      );

      return response.data;
    } catch (error) {
      console.log('error', error);
      const errorResponse: TErrorResponse = {
        status: 'some status',
        message: 'An error occurred', //TODO: revisit this logic
      };
      throw errorResponse;
    }
  }

  public cancelRequest(): void {
    this.abortController.abort();
    this.abortController = new AbortController();
  }
}

export default ServiceNetwork;
