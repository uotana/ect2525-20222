import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/Header';
import Stories from './components/Stories';
import Feed from './components/Feed';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <Stories/>
      <Feed/>
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
