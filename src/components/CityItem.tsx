import { Pressable, StyleSheet, View } from 'react-native';
import React, { FC } from 'react';

import { UIText } from './UI';
import { useThemedStyles } from '../hooks';
import { TTheme } from '../models';
import { BORDER_RADIUS } from '../theme';

interface TCityItemProps {
  cityName: string;
  onPress: () => void;
  temp?: number;
  tempType?: string;
}

const CityItem: FC<TCityItemProps> = ({
  cityName,
  temp,
  tempType,
  onPress,
}) => {
  const [themedStyles] = useThemedStyles(styles);
  return (
    <View style={themedStyles.wrapper}>
      <Pressable onPress={onPress}>
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
      marginHorizontal: 20,
      paddingHorizontal: 40,
    },
  });
