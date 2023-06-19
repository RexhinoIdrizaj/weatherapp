import { Pressable, StyleSheet, View } from 'react-native';
import React, { FC, useCallback } from 'react';

import { UIText } from './UI';
import { useThemedStyles } from '../hooks';
import { TRootStackParamList, TRoutes, TTheme } from '../models';
import { BORDER_RADIUS } from '../theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

interface TCityItemProps {
  cityName: string;
  temp?: number;
  tempType?: string;
}

const CityItem: FC<TCityItemProps> = ({ cityName, temp, tempType }) => {
  const [themedStyles] = useThemedStyles(styles);

  const navigation =
    useNavigation<NativeStackNavigationProp<TRootStackParamList>>();

  const handlePress = useCallback(
    () => navigation.push(TRoutes.CityDetails, { cityName }),
    [cityName, navigation],
  );

  return (
    <View style={themedStyles.wrapper}>
      <Pressable onPress={handlePress}>
        <UIText fontType="regular" size="fs_18">
          {cityName}
        </UIText>
        {temp && tempType && (
          <UIText fontType="bold" size="fs_22">
            {temp}°{tempType}
          </UIText>
        )}
      </Pressable>
    </View>
  );
};

export default CityItem;

const styles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      backgroundColor: theme.white,
      borderRadius: BORDER_RADIUS.br_30,
      flex: 1,
      flexDirection: 'row',
      height: 80,
      justifyContent: 'space-between',
      marginBottom: 10,
      paddingHorizontal: 40,
    },
  });
