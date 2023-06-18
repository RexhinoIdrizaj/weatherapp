import { StyleSheet, SafeAreaView } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';

import { TTheme } from '../../models';
import { useThemedStyles } from '../../hooks';

const UISafeAreaView: FC<PropsWithChildren> = ({ children }) => {
  const [themedStyles] = useThemedStyles(styles);
  return <SafeAreaView style={themedStyles.container}>{children}</SafeAreaView>;
};

export default UISafeAreaView;

const styles = (theme: TTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.screenBackground,
      flex: 1,
    },
  });
