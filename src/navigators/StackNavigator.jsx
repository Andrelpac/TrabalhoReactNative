import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import DrawerNavigator from './DrawerNavigator';

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: '#001766'}}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          title: 'Grupo 6',
          headerTitleStyle: {
            textAlign: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
