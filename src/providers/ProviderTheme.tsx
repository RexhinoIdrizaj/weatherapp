import React, { FC, PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';

import { THEME_DARK, THEME_LIGHT } from '../theme';

export const ThemeContext = React.createContext(THEME_LIGHT);

const ProviderTheme: FC<PropsWithChildren> = ({ children }) => {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'light' ? THEME_LIGHT : THEME_DARK;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ProviderTheme;
