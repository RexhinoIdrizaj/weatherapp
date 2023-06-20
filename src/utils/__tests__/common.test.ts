import {
  date_time_format_types,
  formatDateTime,
  tempConverters,
} from '../common';

describe('common utils', () => {
  it('should format the date correctly', () => {
    const date = '2023-03-29T12:34:56.789Z';
    const expectedOutput = '29 Mar, 2023';

    const result = formatDateTime(date);

    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty string for empty input', () => {
    const inputDate = '';
    const expectedOutput = '';

    const result = formatDateTime(inputDate);

    expect(result).toEqual(expectedOutput);
  });

  it('should be able to format with custom type', () => {
    const date = '2023-03-29T12:34:56.789Z';
    const expectedOutput = '14:34';

    const result = formatDateTime(date, date_time_format_types.time_H_m);

    expect(result).toEqual(expectedOutput);
  });

  it('should convert temperature correctly', () => {
    const fahrenheit = 68;
    const kelvin = 293.15;
    const celsius = 20;

    // Convert Fahrenheit to Celsius
    expect(tempConverters.F(fahrenheit)).toBeCloseTo(celsius);

    // Convert Kelvin to Celsius
    expect(tempConverters.K(kelvin)).toBeCloseTo(celsius);

    // Celsius value should remain the same
    expect(tempConverters.C(celsius)).toBe(celsius);
  });
});
