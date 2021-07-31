import React from 'react';
import {FlatList, Text} from 'react-native';

const List = ({data}) => {
  const renderItem = data => {
    return <Text>{data.name}</Text>;
  };
  return (
    <FlatList
      horizontal={true}
      data={data}
      keyExtractor={() => data.id}
      renderItem={({item}) => renderItem(item)}
    />
  );
};

export default List;
