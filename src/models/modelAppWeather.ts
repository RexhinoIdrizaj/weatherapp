export interface TAppCityWeatherData {
  date: string;
  formattedDate: string;
  wantedTempType: string;
  wantedTemp: number;
}

export interface TAppCitiesData {
  cityName: string;
  cityPicture: string;
  cityWeatherData: TAppCityWeatherData[];
}

export interface TCitiesAcc {
  [cityName: string]: {
    cityName: string;
    cityPicture: string;
    cityWeatherData: TAppCityWeatherData[];
  };
}
