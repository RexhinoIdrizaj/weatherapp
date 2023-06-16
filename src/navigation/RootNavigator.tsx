import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {Platform} from 'react-native';
// import {useTranslation} from 'react-i18next';
// import SplashScreen from 'react-native-splash-screen';

import { TRootStackParamList, TRoutes } from '../models';
import { ScreenCities, ScreenCityDetails } from '../screens';
// import {useHeaderOptions, useTheme} from '../hooks';
// import {navigationRef} from './navigationRefs';

const Stack = createNativeStackNavigator<TRootStackParamList>();

const RootNavigator: React.FC = () => {
  //   const {t} = useTranslation();
  //   const theme = useTheme();

  //   const headerOptions = useHeaderOptions();

  //   const MyTheme = {
  //     ...DefaultTheme,
  //     colors: {
  //       ...DefaultTheme.colors,
  //       background: theme.COLORS.screenBackground,
  //     },
  //   };
  return (
    <NavigationContainer
    //   ref={navigationRef}
    //   theme={MyTheme}
    //   onReady={() => SplashScreen.hide()}
    >
      <Stack.Navigator
        initialRouteName={TRoutes.Cities}
        // screenOptions={{
        //   ...headerOptions,
        //   animation: Platform.select({
        //     android: 'slide_from_right',
        //     ios: 'default',
        //   }),
        // }}
      >
        <Stack.Screen
          name={TRoutes.Cities}
          component={ScreenCities}
          //   options={{
          //     title: t('ScreenNames.events'),
          //   }}
        />
        <Stack.Screen
          name={TRoutes.CityDetails}
          component={ScreenCityDetails}
          //   options={{
          //     title: t('ScreenNames.events'),
          //   }}
        />

        {/* {__DEV__ && (
          <Stack.Screen
            name={EAppRoutes.STORYBOOK}
            component={ScreenStorybook}
          />
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
