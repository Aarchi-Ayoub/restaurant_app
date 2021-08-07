/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {search} from '../../search/actions';
import List from '../components/List';
import {styles} from './styles';
export default props => {
  // Action methode
  const dispatch = useDispatch();

  // On mounting the page
  useEffect(() => {
    dispatch(search());
  }, []);

  // Read state from the store
  const items = useSelector(state => state.search);

  // Filtring methode
  const filtring = params => {
    return items.items.filter(item => {
      return item.price === params;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {/* <Text>{filtring(props.price).length}</Text> */}
      <List data={filtring(props.price)} />
    </View>
  );
};
