import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Stories() {

  const stories = [
    {
      id: 1,
      nome: 'milena',
      src: require('../assets/imagens/milena.png'),
    },
    {
      id: 2,
      nome: 'cassandra',
      src: require('../assets/imagens/cassandra1.png'),
    },
    {
      id: 3,
      nome: 'mike',
      src: require('../assets/imagens/mike.png'),
    },
    {
      id: 4,
      nome: 'alfredo',
      src: require('../assets/imagens/alfredo.png'),
    },
    {
      id: 5,
      nome: 'roberto',
      src: require('../assets/imagens/roberto.png'),
    },
  ];

  function renderItem({item}){
    return <View style={styles.story}>
    <Image style={styles.imgstory} source={item.src}/>
    <Text> {item.nome} </Text>
  </View>
  }

  return (
      <View style={styles.stories}>
        <FlatList
          data={stories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  stories:{
    flexDirection: 'row',
    height: 90,
    backgroundColor: '#00f'
  },
  story:{
    height: 90,
    width: 90,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imgstory:{
    borderRadius:50,
    width:70,
    height:70,
  },
});
