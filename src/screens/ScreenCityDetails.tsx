import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TRootStackParamList, TRoutes } from '../models';
import { useAppSelector } from '../store';
import { selectCity } from '../store/selectors';
import { TempListItem } from '../components';
import FastImage from 'react-native-fast-image';

const ScreenCityDetails = () => {
  const {
    params: { cityName },
  } = useRoute<RouteProp<TRootStackParamList, TRoutes.CityDetails>>();

  const activeCity = useAppSelector(state => selectCity(state)(cityName));
  const sortedData = activeCity
    ? [...activeCity.cityWeatherData].sort((a, b) =>
        a.date.localeCompare(b.date),
      )
    : [];

  return (
    <View style={styles.wrapper}>
      <FastImage
        style={styles.mainImage}
        source={{ uri: activeCity?.cityPicture }}
      />

      <ScrollView contentContainerStyle={styles.tempsWrapper} horizontal>
        {sortedData.map(el => (
          <TempListItem
            key={el.date}
            temperature={el.wantedTemp}
            time={el.formattedDate}
            tempType={el.wantedTempType}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScreenCityDetails;

const styles = StyleSheet.create({
  mainImage: {
    borderRadius: 30,
    height: '50%',
    marginHorizontal: 20,
    marginTop: 20,
  },

  tempsWrapper: {
    paddingLeft: 20,
    paddingVertical: 20,
  },
  wrapper: {
    flex: 1,
  },
});
