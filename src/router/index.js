/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from 'modules/home/containers';
export default () => {
  const Navigation = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigation.Navigator headerMode="none">
        <Navigation.Screen name="Home" component={Home} />
      </Navigation.Navigator>
    </NavigationContainer>
  );
};
