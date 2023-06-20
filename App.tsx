import React from 'react';

import './src/localization';
import { RootNavigator } from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { CustomError, UISafeAreaView, UIStatusBar } from './src/components';
import { ProviderConnection, ProviderTheme } from './src/providers';

const App = () => {
  return (
    <Provider store={store}>
      <ProviderTheme>
        <UIStatusBar />
        <ProviderConnection>
          <UISafeAreaView>
            <CustomError />
            <RootNavigator />
          </UISafeAreaView>
        </ProviderConnection>
      </ProviderTheme>
    </Provider>
  );
};

export default App;
