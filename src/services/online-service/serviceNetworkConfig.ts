import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
} from 'axios';
import type { TErrorResponse, TServiceNetwork } from './modelApi';

function createServiceNetwork(
  instanceConfig: CreateAxiosDefaults,
): TServiceNetwork {
  const axiosInstance = axios.create({
    timeout: instanceConfig?.timeout || 100000,
    ...instanceConfig,
  });

  let abortController = new AbortController();

  const request = async <R>(requestConfig: AxiosRequestConfig): Promise<R> => {
    try {
      const wantedConfig = {
        ...requestConfig,
        signal: abortController.signal,
      };

      const response: AxiosResponse<R> = await axiosInstance.request<R>(
        wantedConfig,
      );

      return response.data;
    } catch (error) {
      // console.log('error request', JSON.stringify(error));
      const errorResponse: TErrorResponse = {
        status: 'some status',
        message: 'An error occurred', //TODO: revisit this logic
      };
      throw errorResponse;
    }
  };

  const cancelRequest = () => {
    abortController.abort();
    abortController = new AbortController();
  };

  return {
    request,
    cancelRequest,
  };
}

export default createServiceNetwork;
