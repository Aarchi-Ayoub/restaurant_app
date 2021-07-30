/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import {styles} from './styles';
export default () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text>Details Screen</Text>
    </View>
  );
};
