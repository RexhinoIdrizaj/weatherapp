import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { TRootStackParamList, TRoutes } from '../models';
import { useAppDispatch, useAppSelector } from '../store';
import { thunkWeather } from '../store/thunks';
import { selectCitiesList } from '../store/selectors';
import { CityItem, UIHeader } from '../components';

type TScreenCitiesNavProps = NativeStackNavigationProp<TRootStackParamList>;

const ScreenCities = () => {
  const navigation = useNavigation<TScreenCitiesNavProps>();
  const cities = useAppSelector(selectCitiesList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunkWeather.fetchWeatherData());
  }, [dispatch]);

  return (
    <View>
      <UIHeader title="Cities" />
      <ScrollView>
        {cities.map(el => (
          <CityItem
            key={el.cityName}
            cityName={el.cityName}
            onPress={() =>
              navigation.push(TRoutes.CityDetails, { cityName: el.cityName })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScreenCities;
