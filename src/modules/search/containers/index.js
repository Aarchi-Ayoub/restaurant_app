/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import {styles} from './styles';
import axios from '../api';
import Toast from 'react-native-toast-message';
import useResults from '../hooks/useResults';
export default () => {
  // Search text
  const [searchText, SetSearchText] = useState('');
  // Import from our custom hook
  const [searchResult, error, serach] = useResults();
  // Show the error message
  useEffect(() => {
    if (error !== '') {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Erreur',
        text2: error,
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
  }, [error]);
  console.log(searchResult);

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchText}
        changeValue={newValue => SetSearchText(newValue)}
        endEdit={() => serach(searchText)}
      />
      <Text>Search total : {searchResult.length}</Text>
    </View>
  );
};
