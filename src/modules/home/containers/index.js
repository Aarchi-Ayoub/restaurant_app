import React from 'react';
import Search from 'modules/search/containers';
import List from 'modules/list/containers';
import {View} from 'react-native';
import {styles} from './styles';
export default () => {
  return (
    <View style={styles.container}>
      <Search />
      <List title="Cost Effective" price="$" />
      <List title="Bit Pricier" price="$$" />
      <List title="Big Spender" price="$$$" />
    </View>
  );
};
