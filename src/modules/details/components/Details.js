import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './Styles';
const Details = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.image_url}} />
      <Text style={styles.name}>{result.name}</Text>
      <View style={styles.noteContainer}>
        <Text style={styles.notes}>Views : {result.review_count}</Text>
        <Text style={styles.notes}>Stars : {result.rating}</Text>
      </View>
    </View>
  );
};

export default Details;
