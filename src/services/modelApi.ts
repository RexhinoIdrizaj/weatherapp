export type TNullable<R> = R | null;

export interface TErrorResponse {
  status: string;
  message: string;
}

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
