import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CitiesList, UIHeader } from '../components';
import { useTranslation } from 'react-i18next';

const ScreenCities = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <UIHeader title={t('ScreenCities.screenTitle')} />
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
