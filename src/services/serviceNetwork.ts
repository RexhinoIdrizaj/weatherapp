import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios';
import { TErrorResponse } from './modelApi';

class ServiceNetwork {
  protected axiosInstance: AxiosInstance;
  protected abortController: AbortController;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
    this.abortController = new AbortController();
  }

  async request<R, D = unknown>(
    method: Method,
    url: string,
    data?: D,
  ): Promise<R> {
    try {
      const config: AxiosRequestConfig = {
        method,
        url,
        data,
        signal: this.abortController.signal,
      };

      const response: AxiosResponse<R> = await this.axiosInstance.request<R>(
        config,
      );

      return response.data;
    } catch (error) {
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
