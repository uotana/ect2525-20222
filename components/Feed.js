import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Feed(){

    const feed = [
      {
        id: 1,
        nome: "alfredo",
        srcImgPerfil:require('../assets/imagens/alfredo.png') ,
        srcImgPost: require('../assets/imagens/alfredo_e_humana.png'),
        aspectRatio: 813/502
      },
      {
        id: 2,
        nome: "cassandra",
        srcImgPerfil:require('../assets/imagens/cassandra1.png') ,
        srcImgPost: require('../assets/imagens/cassandra.png'),
        aspectRatio: 505/435
      },
    ];

    function renderItem({item}){
      return <View style={styles.post}>
      <View style={styles.postheader}>
          <View style={styles.postheaderesquerda}>
            <Image style={styles.postheaderimg} source={item.srcImgPerfil}/>
            <Text style={styles.postheaderusername}>{item.nome}</Text>
          </View>
          <FontAwesome5 name="ellipsis-v" size={16} color="black"/>
      </View>
      <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={item.srcImgPost}/>
      <View style={styles.footer}>
          <View style={styles.footerleft}>
            <FontAwesome5 name="heart" size={24} color="black"/>
            <FontAwesome5 name="comment" size={24} color="black"/>
            <FontAwesome5 name="paper-plane" size={24} color="black"/>
        </View>
        <FontAwesome5 name="bookmark" size={24} color="black"/>
    </View>
  </View>
  }
  

  return (
    <View style={styles.feed}>
      <FlatList
        data={feed}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
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
})