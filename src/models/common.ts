import { TApiTempType } from '../services';

export type TNullable<R> = R | null;

export type TTempConverter = {
  [key in TApiTempType]: (temp: number) => number;
};

export enum EAsyncStorageKeys {
  LANGUAGE = 'LANGUAGE',
}
