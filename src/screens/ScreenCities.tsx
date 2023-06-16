import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TRootStackParamList, TRoutes } from '../models';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TScreenCitiesNavProps = NativeStackNavigationProp<TRootStackParamList>;

const ScreenCities = () => {
  const navigation = useNavigation<TScreenCitiesNavProps>();
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
