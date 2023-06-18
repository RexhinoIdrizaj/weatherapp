import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';

import UIText from './UIText';
import { useThemedStyles } from '../../hooks';
import { TTheme } from '../../models';
import { FONT_SIZE } from '../../theme';

interface UIHeaderProps {
  title: string;
}

const UIHeader: FC<UIHeaderProps> = ({ title }) => {
  const [themedStyles] = useThemedStyles(styles);
  return (
    <View style={themedStyles.wrapper}>
      <UIText style={themedStyles.title}>{title}</UIText>
    </View>
  );
};

export default UIHeader;

const styles = (theme: TTheme) =>
  StyleSheet.create({
    title: {
      color: theme.black,
      fontSize: FONT_SIZE.fs_32,
    },
    wrapper: {
      alignItems: 'center',
      backgroundColor: theme.screenBackground,
      height: 126,
      justifyContent: 'center',
    },
  });
