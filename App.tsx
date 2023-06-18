import React from 'react';

import { RootNavigator } from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { UISafeAreaView, UIStatusBar } from './src/components';
import { ProviderTheme } from './src/providers';

const App = () => {
  return (
    <Provider store={store}>
      <ProviderTheme>
        <UIStatusBar />
        <UISafeAreaView>
          <RootNavigator />
        </UISafeAreaView>
      </ProviderTheme>
    </Provider>
  );
};

export default App;
