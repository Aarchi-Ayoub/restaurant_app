import React from 'react';
import Search from 'modules/search/containers';
import List from 'modules/list/containers';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
export default () => {
  return (
    <View style={styles.container}>
      <Search />
      <ScrollView>
        <List title="Cost Effective" price="$" />
        <List title="Bit Pricier" price="$$" />
        <List title="Big Spender" price="$$$" />
      </ScrollView>
    </View>
  );
};
