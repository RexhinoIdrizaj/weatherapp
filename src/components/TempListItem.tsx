import { StyleSheet, View } from 'react-native';

import React, { FC } from 'react';
import { UIText } from './UI';
import { useThemedStyles } from '../hooks';
import { TTheme } from '../models';

interface TTempListItemProps {
  temperature: number;
  time: string;
  tempType: string;
}

const TempListItem: FC<TTempListItemProps> = ({
  temperature,
  time,
  tempType,
}) => {
  const [themedStyles] = useThemedStyles(styles);
  return (
    <View style={themedStyles.tempItem}>
      <UIText color="textColorSecondary" size="fs_16">
        {time}
      </UIText>
      <UIText fontType="bold" style={themedStyles.tempText} size="fs_24">
        {temperature}°<UIText size="fs_18">{tempType}</UIText>
      </UIText>
    </View>
  );
};

export default TempListItem;

const styles = (theme: TTheme) =>
  StyleSheet.create({
    tempItem: {
      alignItems: 'center',
      backgroundColor: theme.white,
      borderRadius: 20,
      marginRight: 10,
      maxHeight: 120,
      padding: 15,
    },
    tempText: {
      marginTop: 15,
    },
  });
