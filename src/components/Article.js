import React from 'react'
import {StyleSheet, Text, View,SafeAreaView, Image, Pressable} from 'react-native'
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'; 


const Article=({urlToImage,title,description,author,publishedAt,sourceName,content})=>{
const navigation=useNavigation();
const handlePress = () => {
    navigation.navigate('ArticleDetails', {
      urlToImage,
      title,
      description,
      author,
      publishedAt,
      sourceName,
      content,
    });
  };

    return (
        <Pressable style={styles.container} onPress={handlePress} >
        <View style={{flexDirection:'column'}}>
      <Image source={{
uri:urlToImage
      }}
        style={styles.image}
      />
      <View style={{padding:scale(15),flex:1}}>
<Text style={styles.title}>
   {title}
</Text>

<View style={{marginTop:scale(10),marginLeft:scale(10),alignItems:'flex-end'}}>
<Text style={{color:'grey',fontSize:scale(10)}}>source: <Text style={styles.source}
>{sourceName}</Text></Text>
</View>

</View>
</View>
        </Pressable>
    )
}

const styles=ScaledSheet.create({
    container:{
        width:"90%",
        alignSelf:'center',
        borderRadius:40,
        shadowOpacity:0.5,
        shadowColor:'#000',
        shadowOffset:{
            height:5,
            width:5,
        },
        backgroundColor:'#fff',
        marginTop:scale(10),
        elevation:5


    } ,
    image:{
        height:verticalScale(200),
        width:"100%",
        marginTop:scale(10),
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    title:{
        fontSize:scale(15),
        fontWeight:"600",
        marginTop:verticalScale(5),
        color:'grey'

    },
    description:{
        fontSize:scale(10),
        fontWeight:"400",
        marginTop:verticalScale(2),
        color:'grey',
    },

    heading:{
        color:'grey',

    },
    author:{
        fontWeight:'bold',
        fontSize:scale(12),
        color:'#bcd39c'


    },
    date:{
        fontWeight:'bold',
        color:'#bcd39c',
        fontSize:scale(12),
    },
    source:{
        marginTop:scale(10),
        fontWeight:'bold',
        color:'#bcd39c',
        fontSize:scale(12),

    }
})

export default Article;