export enum TRoutes {
  Cities = 'Cities',
  CityDetails = 'CityDetails',
}

interface TCityDetailsDetailsParams {
  cityName: string;
}

export type TRootStackParamList = {
  [TRoutes.Cities]: undefined;
  [TRoutes.CityDetails]: TCityDetailsDetailsParams;
};
