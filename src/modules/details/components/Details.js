import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './Styles';
import {useNavigation} from '@react-navigation/native';
const Details = ({result}) => {
  // hook which gives access to navigation object
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {_id: result.id})}>
        <Image style={styles.image} source={{uri: result.image_url}} />
      </TouchableOpacity>
      <Text style={styles.name}>{result.name}</Text>
      <View style={styles.noteContainer}>
        <Text style={styles.notes}>Views : {result.review_count}</Text>
        <Text style={styles.notes}>Stars : {result.rating}</Text>
      </View>
    </View>
  );
};

export default Details;
