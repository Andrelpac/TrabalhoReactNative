import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';
import DrawNavigator from './navigators/DrawerNavigator';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() =>{
    SplashScreen.hide();
  }, []);
  
  return (
    <NavigationContainer>
      <StackNavigator>
        <DrawNavigator />
      </StackNavigator>
    </NavigationContainer>
  );
};

export default App;
