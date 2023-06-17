export type TNullable<R> = R | null;

export interface TErrorResponse {
  status: string;
  message: string;
}

export interface TCity {
  name: string;
  picture: string;
}

export type TTempType = 'C' | 'F' | 'K';

/*
 * GET Weather
 */

export interface TWeatherData {
  date: string;
  city: TCity;
  tempType: TTempType;
  temp: number;
}
export type TGetWeatherResponse = TWeatherData[];
