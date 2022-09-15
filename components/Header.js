import { StyleSheet, View, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header() {
    return(
        <View style={styles.header}>
        <Image style={styles.ufrngram} source={require('../assets/imagens/ufrngram.png')}/>
        <View style={styles.headerright}>
          <FontAwesome5 name="plus-square" size={24} color="black"/>
          <FontAwesome5 name="heart" size={24} color="black"/>
          <FontAwesome5 name="paper-plane" size={24} color="black"/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
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
});