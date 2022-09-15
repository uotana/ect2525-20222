import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <View style={styles.stories}>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/milena.png')}/>
          <Text> milena </Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/cassandra1.png')}/>
          <Text> cassandra </Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/mike.png')}/>
          <Text> mike </Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/alfredo.png')}/>
          <Text> alfredo </Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/roberto.png')}/>
          <Text> miauauau </Text>
        </View>
      </View>
      <View style={styles.feed}>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image style={styles.postheaderimg} source={require('./assets/imagens/alfredo.png')}/>
              <Text style={styles.postheaderusername}>alfredo</Text>
            </View>
            <FontAwesome5 name="ellipsis-v" size={16} color="black"/>
          </View>
          <Image style={styles.postimg} aspectRatio={813/502} source={require('./assets/imagens/alfredo_e_humana.png')}/>
          <View style={styles.footer}>
            <View style={styles.footerleft}>
              <FontAwesome5 name="heart" size={24} color="black"/>
              <FontAwesome5 name="comment" size={24} color="black"/>
              <FontAwesome5 name="paper-plane" size={24} color="black"/>
            </View>
            <FontAwesome5 name="bookmark" size={24} color="black"/>
        </View>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image style={styles.postheaderimg} source={require('./assets/imagens/cassandra1.png')}/>
              <Text style={styles.postheaderusername}>cassandra</Text>
            </View>
            <FontAwesome5 name="ellipsis-v" size={16} color="black"/>
          </View>
          <Image style={styles.postimg} aspectRatio={813/502} source={require('./assets/imagens/cassandra.png')}/>
          <View style={styles.footer}>
            <View style={styles.footerleft}>
              <FontAwesome5 name="heart" size={24} color="black"/>
              <FontAwesome5 name="comment" size={24} color="black"/>
              <FontAwesome5 name="paper-plane" size={24} color="black"/>
            </View>
            <FontAwesome5 name="bookmark" size={24} color="black"/>
        </View>
        </View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  header:{
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerright:{
    flexDirection: 'row',
    width: '35%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  ufrngram: {
    height: 25,
    width: 110,
  },
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
  feed: {
    flex: 1,
    backgroundColor: 'white',
  },
  post:{
    backgroundColor: 'white',
  },
  postheader:{
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  postheaderesquerda:{
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between'
  },
  postheaderimg:{
    borderRadius:35,
    width:30,
    height:30,
    marginRight: 10,
  },
  postimg:{
    width: '100%',
    height: undefined,
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height:50,
    alignItems: 'center',
    //backgroundColor: 'pink',
    backgroundColor: 'white',
  },
  footerleft:{
    flexDirection: 'row',
    width: '35%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  postheaderusername:{
    fontWeight: "bold",
  }
});
