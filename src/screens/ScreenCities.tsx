import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { CitiesList, UIHeader } from '../components';
import { useTranslation } from 'react-i18next';
import i18n from '../localization';

const ScreenCities = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <UIHeader title={t('ScreenCities.screenTitle')} />
      <Button onPress={() => i18n.changeLanguage('nl')} title="nl" />
      <Button onPress={() => i18n.changeLanguage('en')} title="en" />
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
