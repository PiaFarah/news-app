// Create a new component, let's call it ArticleDetails.js

import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters';

const ArticleDetails = ({ route }) => {
  const { urlToImage,title, description, author, publishedAt, sourceName ,content} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{
uri:urlToImage,
      }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={{...styles.description,fontWeight:'bold'}}>{description}</Text>
      <Text style={{...styles.description}}> {content}</Text>
      <View style={{alignItems:'flex-end'}}>
      <Text style={styles.publishedAt}>{publishedAt}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.sourceName}>{sourceName}</Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: 16,
    color:'grey'
  },
  image:{
    width:"100%",
    height:verticalScale(250),
    borderRadius:10

  },
  title:{
    fontSize:scale(15),
    fontWeight:"600",
    marginTop:verticalScale(5),
    color:'grey',
    textAlign:'center'

},
description:{
    fontSize:scale(10),
    fontWeight:"400",
    marginTop:verticalScale(10),
    color:'grey',
},
author:{
    fontWeight:'bold',
    color:'#Bcd39c',
    fontSize:scale(12),
    marginTop:scale(10)


},
publishedAt:{
    fontWeight:'bold',
    color:'#bcd39c',
    fontSize:scale(12)


},
sourceName:{
    fontWeight:'bold',
    color:'#bcd39c',
    fontSize:scale(12)

}
});

export default ArticleDetails;
