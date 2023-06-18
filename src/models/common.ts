import { TApiTempType } from '../services/modelApi';

export type TNullable<R> = R | null;

export type TTempConverter = {
  [key in TApiTempType]: (temp: number) => number;
};
