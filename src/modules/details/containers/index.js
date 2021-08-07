import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {getOne} from '../actions';
import {useDispatch, useSelector} from 'react-redux';
export default () => {
  // hook which gives access to route object
  const route = useRoute();

  // Actions methode access
  const dispatch = useDispatch();

  // State for the comming data
  // const [item, setItem] = useState({});

  // Read from store
  const result = useSelector(state => state.result.item);

  // Page load
  useEffect(() => {
    dispatch(getOne(route.params._id));
    // setItem(result);
  }, []);

  if (!result) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        data={result.photos}
        extraData={result.photos}
        key={() => '_' + Math.random()}
        keyExtractor={id => id}
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri: item}} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  name: {
    textAlign: 'center',
    fontSize: 21,
    marginVertical: 15,
  },
  image: {
    height: 150,
    width: 300,
    marginBottom: 10,
    alignSelf: 'center',
  },
});
