/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Search from 'modules/search/containers';
export default () => {
  const Navigation = createStackNavigator();
  return (
    <NavigationContainer >
      <Navigation.Navigator >
        <Navigation.Screen name="Search" component={Search} />
      </Navigation.Navigator >
    </NavigationContainer >
  );
};
