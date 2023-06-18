import React, { useEffect } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { TRootStackParamList, TRoutes } from '../models';
import { useAppDispatch, useAppSelector } from '../store';
import { thunkWeather } from '../store/thunks';
import { selectCitiesList } from '../store/selectors';

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
      <ScrollView>
        {cities.map(el => (
          <Text>{el.cityName}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScreenCities;
