import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Stories() {

  const [stories, setStories] = useState([]);

  useEffect(function(){
    async function getData(){
      const response = await fetch('https://mobile.ect.ufrn.br:3000/stories');
      const stories = await response.json();
      setStories(stories);
    }
    getData();
  },[])

  function renderItem({item}){
    return <View style={styles.story}>
    <Image style={styles.imgstory} source={{uri: item.imgPerfilUri}}/>
    <Text> {item.nomeUsuario} </Text>
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
