import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import React, { FC, useCallback, useEffect } from 'react';

import { TAppCitiesData } from '../models';
import CityItem from './CityItem';
import { useAppDispatch, useAppSelector } from '../store';
import { selectCitiesList, selectLoadingCities } from '../store/selectors';
import { thunkWeather } from '../store/thunks';
import { UIListEmpty, UIViewWrapper } from './UI';

const CitiesList: FC = () => {
  const cities = useAppSelector(selectCitiesList);
  const loading = useAppSelector(selectLoadingCities);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunkWeather.fetchWeatherData());
  }, [dispatch]);

  const renderItem = ({ item }: ListRenderItemInfo<TAppCitiesData>) => {
    return <CityItem cityName={item.cityName} />;
  };

  const renderEmptyComponent = useCallback(
    () => <UIListEmpty text="No Data" />,
    [],
  );

  const handleRefresh = useCallback(() => {
    dispatch(thunkWeather.fetchWeatherData());
  }, [dispatch]);

  if (loading) return <ActivityIndicator />;

  return (
    <UIViewWrapper>
      <FlatList
        data={cities}
        contentContainerStyle={styles.listContainer}
        renderItem={renderItem}
        refreshing={loading}
        ListEmptyComponent={renderEmptyComponent}
        onRefresh={handleRefresh}
      />
    </UIViewWrapper>
  );
};

export default CitiesList;

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
  },
});
