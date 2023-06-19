import { StyleSheet, Text, TextProps } from 'react-native';
import React, { FC } from 'react';

import { useThemedStyles } from '../../hooks';
import { TTheme, TThemeFonts } from '../../models';
import { FONT_SIZE, fonts } from '../../theme';

export interface TUITextProps extends TextProps {
  size?: keyof typeof FONT_SIZE;
  fontType?: TThemeFonts;
  color?: keyof TTheme;
}

const UIText: FC<TUITextProps> = ({
  fontType = 'regular',
  size = 'fs_14',
  color = 'textColorPrimary',
  style,
  children,
  ...props
}) => {
  const [themedStyles] = useThemedStyles(styles, { color, fontType, size });

  return (
    <Text style={[themedStyles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default UIText;

type TStylesProps = Required<Pick<TUITextProps, 'color' | 'fontType' | 'size'>>;

const styles = (theme: TTheme, props: TStylesProps) => {
  return StyleSheet.create({
    text: {
      color: theme[props.color],
      fontFamily: fonts[props.fontType],
      fontSize: FONT_SIZE[props.size],
    },
  });
};
