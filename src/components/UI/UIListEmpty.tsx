import React, { FC } from 'react';

import UIText from './UIText';
import UIViewWrapper from './UIViewWrapper';
import { StyleSheet } from 'react-native';

interface UIListEmptyProps {
  text: string;
}
const UIListEmpty: FC<UIListEmptyProps> = ({ text }) => {
  return (
    <UIViewWrapper style={styles.wrapper}>
      <UIText>{text}</UIText>
    </UIViewWrapper>
  );
};

export default UIListEmpty;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
