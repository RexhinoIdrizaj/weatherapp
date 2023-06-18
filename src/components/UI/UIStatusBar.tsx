import { StatusBar, useColorScheme } from 'react-native';
import React, { FC } from 'react';

const UIStatusBar: FC = () => {
  const colorScheme = useColorScheme();
  if (!colorScheme) return null;
  const wantedScheme = colorScheme === 'dark' ? 'light' : 'dark';
  return (
    <StatusBar
      barStyle={`${wantedScheme}-content`}
      backgroundColor="transparent"
    />
  );
};

export default UIStatusBar;
