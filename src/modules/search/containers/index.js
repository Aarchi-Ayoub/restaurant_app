/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import {styles} from './styles';
import axios from '../api';
import Toast from 'react-native-toast-message';
import {useRef} from 'react';
export default () => {
  // Search text
  const [searchText, SetSearchText] = useState('');
  // Search result
  const [searchResult, SetSearchResult] = useState([]);
  // Error message
  const [error, SetError] = useState('');
  // Search methode
  const serach = async () => {
    try {
      const {data} = await axios.get('/search', {
        params: {
          limit: 50,
          term: searchText,
          location: 'san jose',
        },
      });
      SetSearchResult(data.businesses);
    } catch (err) {
      SetError(err.message);
    }
  };
  // Show error message
  useEffect(() => {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: 'Erreur',
      text2: error,
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      onShow: () => {},
      onHide: () => {},
      onPress: () => {},
    });
  }, [error]);

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchText}
        changeValue={newValue => SetSearchText(newValue)}
        endEdit={() => serach()}
      />
      <Text>Search total : {searchResult.length}</Text>
    </View>
  );
};
