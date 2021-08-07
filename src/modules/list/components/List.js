import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import Details from '../../details/components/Details';
import {useNavigation} from '@react-navigation/native';

const List = ({data}) => {
  // hook which gives access to navigation object
  const nav = useNavigation();
  console.log(data);
  const render = data => {
    if (data.length) {
      return (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={data => data.id}
          renderItem={({item}) => <Details result={item} />}
        />
      );
    } else {
      return (
        <Text
          style={{
            backgroundColor: '#FFB4BD',
            fontSize: 20,
            color: '#000',
            padding: 5,
            textAlign: 'center',
            marginVertical: 10,
            opacity: 0.7,
          }}>
          Aucun enregistrement n' est trouvé !
        </Text>
      );
    }
  };
  return render(data);
  // <FlatList
  //   horizontal={true}
  //   showsHorizontalScrollIndicator={false}
  //   data={data}
  //   keyExtractor={data => data.id}
  //   renderItem={({item}) => <Details result={item} />}
  // />
  // <Text>{JSON.stringify(data)}</Text>
};

export default List;
