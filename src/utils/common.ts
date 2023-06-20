import { format, parseISO } from 'date-fns';
import { TTempConverter } from '../models';

export const ERROR_POPUP_TIMEOUT = 2000;

export const tempConverters: TTempConverter = {
  F: (fahrenheit: number) => (fahrenheit - 32) / 1.8,
  K: (kelvin: number) => kelvin - 273.15,
  C: (celsius: number) => celsius,
};

export const date_time_format_types = {
  time_H_m: "'HH:mm'",
  date_full: 'DD MMM, YYYY',
};

export const formatDateTime = (
  date: string,
  formatType: string = date_time_format_types.date_full,
) => {
  if (!date) return '';

  return format(parseISO(date), formatType);
};
