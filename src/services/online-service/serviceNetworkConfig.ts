import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
} from 'axios';
import type { TErrorResponse, TServiceNetwork } from './modelApi';

/*
 * Service responsible only for axios config.
 */

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
      const axiosError = error as AxiosError;
      const errorResponse: TErrorResponse = {
        status: axiosError?.response?.status?.toString(),
        message: axiosError?.message,
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
