import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CitiesList, UIHeader } from '../components';

const ScreenCities = () => {
  return (
    <View style={styles.container}>
      <UIHeader title="Cities" />
      <CitiesList />
    </View>
  );
};

export default ScreenCities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
