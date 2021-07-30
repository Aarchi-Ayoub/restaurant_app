/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import {styles} from './styles';
export default () => {
  const [searchText, SetSearchText] = useState('');
  console.log(searchText);
  return (
    <View style={styles.container}>
      <SearchBar value={searchText} changeValue={newValue=>SetSearchText(newValue)} />
      <Text>Details Screen</Text>
    </View>
  );
};
