import { StyleSheet, Text, View, Image } from 'react-native';

export default function Stories() {
  return (
      <View style={styles.stories}>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('../assets/imagens/milena.png')}/>
          <Text> milena </Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('../assets/imagens/cassandra1.png')}/>
          <Text> cassandra </Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('../assets/imagens/mike.png')}/>
          <Text> mike </Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('../assets/imagens/alfredo.png')}/>
          <Text> alfredo </Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('../assets/imagens/roberto.png')}/>
          <Text> miauauau </Text>
        </View>
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
