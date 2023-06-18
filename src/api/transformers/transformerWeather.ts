import { format, parseISO } from 'date-fns';

import { TAppCitiesData, TCitiesAcc } from '../../models/modelAppWeather';
import {
  TApiGetWeatherResponse,
  TApiTempType,
  TApiWeatherData,
} from '../../services/modelApi';
import { tempConverters } from '../../utils';

const transformTemperature = (tempType: TApiTempType, temp: number) => {
  const converter = tempConverters[tempType];
  return converter(temp);
};

const transformToCityWeatherData = (item: TApiWeatherData) => {
  const wantedTemp = transformTemperature(item.tempType, item.temp).toFixed(2);
  return {
    date: item.date,
    formattedDate: format(parseISO(item.date), 'HH:mm'), //TODO: revist this format type and extract logic
    wantedTemp: parseInt(wantedTemp),
    wantedTempType: 'C',
  };
};

/*
 * GET weather transformer
 */
export const transformGetWeatherResToAppData = (
  response: TApiGetWeatherResponse,
): TAppCitiesData[] => {
  const uniqueCitiesData = response.reduce(
    (acc: TCitiesAcc, item: TApiWeatherData) => {
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
    },
    {},
  );

  return Object.values(uniqueCitiesData);
};
