import { useContext } from 'react';
import { ThemeContext } from '../providers';
import { TStylesParam, TTheme } from '../models/modelTheme';

const useThemedStyles = <T extends Record<string, unknown>, P>(
  styles: TStylesParam<T, P>,
  other?: P,
): [T, TTheme] => {
  const theme = useContext(ThemeContext);
  const themedStyles = styles(theme, other);
  return [themedStyles, theme];
};

export default useThemedStyles;
