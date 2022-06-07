import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigations';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <MainStack />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
