import { TAppCitiesData, TCitiesAcc } from '../../models/modelAppWeather';
import {
  TApiGetWeatherResponse,
  TApiTempType,
  TApiWeatherData,
} from '../../services';
import {
  date_time_format_types,
  formatDateTime,
  tempConverters,
} from '../../utils';

const transformTemperature = (tempType: TApiTempType, temp: number) => {
  const converter = tempConverters[tempType];
  return converter(temp);
};

/*
 * Transform data to UI layer interface for each city
 */

const transformToCityWeatherData = (item: TApiWeatherData) => {
  const wantedTemp = transformTemperature(item.tempType, item.temp).toFixed(2);
  return {
    date: item.date,
    formattedDate: formatDateTime(item.date, date_time_format_types.time_H_m),
    wantedTemp: parseInt(wantedTemp),
    wantedTempType: 'C',
  };
};

/*
 * Group Data for each unique city
 */

const groupCityData = (data: TApiGetWeatherResponse): TCitiesAcc =>
  data.reduce((acc: TCitiesAcc, item: TApiWeatherData) => {
    const cityName = item.city.name;

    if (acc[cityName]) {
      // If the city already exists, add the weather data
      acc[cityName].cityWeatherData.push(transformToCityWeatherData(item));
    } else {
      // If the city doesn't exist, create a new entry
      acc[cityName] = {
        cityName,
        cityPicture: item.city?.picture,
        cityWeatherData: [transformToCityWeatherData(item)],
      };
    }

    return acc;
  }, {});

/*
 * GET weather transformer
 */
export const transformGetWeatherResToAppData = (
  response: TApiGetWeatherResponse,
): TAppCitiesData[] => {
  const groupedData = groupCityData(response);
  return Object.values(groupedData);
};
