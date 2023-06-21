import { AxiosRequestConfig } from 'axios';

export type TNullable<R> = R | null;

export interface TErrorResponse {
  status?: string;
  message?: string;
}

/*
 * Services interface
 */
export interface TServiceNetwork {
  request: <R>(requestConfig: AxiosRequestConfig) => Promise<R>;
  cancelRequest: () => void;
}
export interface TServiceWeather {
  getWeather: () => Promise<TApiGetWeatherResponse>;
}

export type TUnifiedApi = Pick<TServiceNetwork, 'cancelRequest'> &
  TServiceWeather;

/*
 * API Common
 */

export interface TApiCity {
  name: string;
  picture: string;
}

export type TApiTempType = 'C' | 'F' | 'K';

/*
 * GET Weather
 */

export interface TApiWeatherData {
  date: string;
  city: TApiCity;
  tempType: TApiTempType;
  temp: number;
}
export type TApiGetWeatherResponse = TApiWeatherData[];
