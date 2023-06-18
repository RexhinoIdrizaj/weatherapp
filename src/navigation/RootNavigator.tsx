import React, { useContext, useMemo } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
// import {Platform} from 'react-native';
// import {useTranslation} from 'react-i18next';
// import SplashScreen from 'react-native-splash-screen';

import { TRootStackParamList, TRoutes } from '../models';
import { ScreenCities, ScreenCityDetails } from '../screens';
import { ThemeContext } from '../providers';
import { FONT_SIZE } from '../theme';

// import {useHeaderOptions, useTheme} from '../hooks';
// import {navigationRef} from './navigationRefs';

const Stack = createNativeStackNavigator<TRootStackParamList>();

const RootNavigator: React.FC = () => {
  //   const {t} = useTranslation();
  const theme = useContext(ThemeContext);
  const myTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      background: theme.screenBackground,
    },
  };
  // const myTheme = useMemo(
  //   () => ({
  //     ...DefaultTheme,
  //     colors: {
  //       ...DefaultTheme.colors,
  //       background: theme.screenBackground,
  //     },
  //   }),
  //   [theme],
  // );

  const headerOptions: NativeStackNavigationOptions = useMemo(
    () => ({
      headerTitleStyle: {
        color: theme.black,
        fontSize: FONT_SIZE.fs_22,
      },
      headerStyle: {
        backgroundColor: theme.transparent,
      },
      // headerTransparent: true,
      headerShadowVisible: false,
      headerTintColor: theme.black,
      headerTitleAlign: 'center',
    }),
    [theme],
  );

  return (
    <NavigationContainer
      theme={myTheme}
      //   onReady={() => SplashScreen.hide()}
    >
      <Stack.Navigator
        initialRouteName={TRoutes.Cities}
        screenOptions={headerOptions}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={TRoutes.Cities}
          component={ScreenCities}
        />
        <Stack.Screen
          name={TRoutes.CityDetails}
          component={ScreenCityDetails}
          options={({ route }) => ({
            // ...headerOptions,
            title: route.params.cityName,
          })}
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
