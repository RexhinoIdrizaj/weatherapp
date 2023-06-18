import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { TRootStackParamList, TRoutes } from '../models';
import { useAppDispatch, useAppSelector } from '../store';
import { thunkWeather } from '../store/thunks';
import { selectCitiesList } from '../store/selectors';
import { api } from '../api';

type TScreenCitiesNavProps = NativeStackNavigationProp<TRootStackParamList>;

const ScreenCities = () => {
  const navigation = useNavigation<TScreenCitiesNavProps>();
  const cities = useAppSelector(selectCitiesList);
  const dispatch = useAppDispatch();
  console.log('cities', cities);
  useEffect(() => {
    dispatch(thunkWeather.fetchWeatherData());
    // const smth = async () => {
    //   try {
    //     console.log('api?.getWeather', api);
    //     const res = await api?.getWeather();
    //     console.log('res', res);
    //   } catch (error) {
    //     console.log('error', error);
    //   }
    // };
    // smth();
    // return () => {};
  }, [api]);

  return (
    <View>
      <Pressable
        onPress={() => navigation.push(TRoutes.CityDetails, { id: '1' })}>
        <Text>ScreenCities</Text>
      </Pressable>
    </View>
  );
};

export default ScreenCities;
