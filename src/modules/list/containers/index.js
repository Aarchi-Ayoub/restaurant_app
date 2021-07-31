/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import List from '../components/List';
import {styles} from './styles';
export default props => {
  // Read state from the store
  const items = useSelector(state => state.search);
  console.log(items.items);
  // Filtring methode
  const filtring = params => {
    return items.items.filter(item => {
      return item.price === params;
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text>{filtring(props.price).length}</Text>
      <List data={filtring(props.price)} />
    </View>
  );
};
