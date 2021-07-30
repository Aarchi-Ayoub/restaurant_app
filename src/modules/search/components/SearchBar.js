/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
const SearchBar = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.icon} source={require('assets/images/search.png')}/>
        <TextInput style={styles.searchText} placeholder="Search" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical:10,
    marginHorizontal:25,
    backgroundColor: '#F0EEEE',
    height:50,
    borderRadius:10,
    flexDirection:'row',
  },
  icon:{
      width:25,
      height:25,
      position:'relative',
      top:15,
      left:15,
  },
  searchText: {
    paddingLeft: '10%',
    marginLeft:15,
    flex:1,
    color:'#000',
    fontSize:20,
  },
});
export default SearchBar;
