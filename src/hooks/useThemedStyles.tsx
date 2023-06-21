import { useContext } from 'react';

import { ThemeContext } from '../providers';
import { TStylesParam, TTheme } from '../models/modelTheme';

/*
 * Hook to retrieve styles inject theme to them. also exposing the theme for direct usage
 */

const useThemedStyles = <T extends Record<string, unknown>, P>(
  styles: TStylesParam<T, P>,
  other = {} as P,
): [T, TTheme] => {
  const theme = useContext(ThemeContext);

  const themedStyles = styles(theme, other);
  return [themedStyles, theme];
};

export default useThemedStyles;
