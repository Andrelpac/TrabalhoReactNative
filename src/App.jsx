import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';
import DrawNavigator from './navigators/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator>
        <DrawNavigator />
      </StackNavigator>
    </NavigationContainer>
  );
};

export default App;
