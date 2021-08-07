/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import {styles} from './styles';
import Toast from 'react-native-toast-message';

import {useDispatch} from 'react-redux';
import {search} from '../actions';
import {useSelector} from 'react-redux';
export default () => {
  // Actions methode access
  const dispatch = useDispatch();

  // Search text
  const [searchText, SetSearchText] = useState('');

  // Error message
  const [error, SetError] = useState('');

  // Read from store
  const count = useSelector(state => state.search.items);

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

  /* Search methode */
  const serach = async text => {
    const err = await dispatch(search(text));
    if (err) {
      SetError(err);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchText}
        changeValue={newValue => SetSearchText(newValue)}
        endEdit={() => serach(searchText)}
      />
      <Text style={styles.count}>Search total : {count.length}</Text>
    </View>
  );
};
