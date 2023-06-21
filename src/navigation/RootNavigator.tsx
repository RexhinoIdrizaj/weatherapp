import React, { useContext, useMemo } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { TRootStackParamList, TRoutes } from '../models';
import { ScreenCities, ScreenCityDetails } from '../screens';
import { ThemeContext } from '../providers';
import { FONT_SIZE } from '../theme';

const Stack = createNativeStackNavigator<TRootStackParamList>();

const RootNavigator: React.FC = () => {
  const theme = useContext(ThemeContext);
  const myTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      background: theme.screenBackground,
    },
  };

  const headerOptions: NativeStackNavigationOptions = useMemo(
    () => ({
      headerTitleStyle: {
        color: theme.black,
        fontSize: FONT_SIZE.fs_22,
      },
      headerStyle: {
        backgroundColor: theme.transparent,
      },
      headerShadowVisible: false,
      headerTintColor: theme.black,
      headerTitleAlign: 'center',
    }),
    [theme],
  );

  return (
    <NavigationContainer theme={myTheme}>
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
            title: route.params.cityName,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
