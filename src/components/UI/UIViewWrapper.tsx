import { StyleSheet, View, ViewProps } from 'react-native';
import React, { FC } from 'react';

type TUIWrapperProps = ViewProps;

const UIViewWrapper: FC<TUIWrapperProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

export default UIViewWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
