import { TTempConverter } from '../models';

export const tempConverters: TTempConverter = {
  F: (fahrenheit: number) => (fahrenheit - 32) / 1.8,
  K: (kelvin: number) => kelvin - 273.15,
  C: (celsius: number) => celsius,
};