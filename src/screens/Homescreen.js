import React,{useEffect, useState} from 'react'
import {StyleSheet, Text, View,SafeAreaView, ScrollView, FlatList} from 'react-native'
import Article from '../components/Article'
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { setArticles } from '../redux/actions/articleAction';

const Homescreen=()=>{
    const dispatch=useDispatch();
    const articles=useSelector((state)=>state.articles.articles)
    const getNews=()=>{

axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=92678b3790bb4f7bb59e9fb6c95428d2',{
params:{
    category:"science",
}})
  .then(function (response) {
    const filteredArticles = response.data.articles.filter(
        (article) => article.urlToImage && article.author !== null
      );
    //   setArticles(filteredArticles);
    dispatch(setArticles(filteredArticles))
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    }

    useEffect(()=>{
        getNews();
    },);

    return (
        <SafeAreaView style={styles.container}>
      <FlatList
      data={articles}
      renderItem={({item})=>
      <Article
      urlToImage={item.urlToImage}
      title = {item.title}
      description = {item.description}
      author = {item.author}
      publishedAt = {item.publishedAt}
      sourceName = {item.source.name}
      content={item.content}
      />}
      keyExtractor={(item)=>item.title}
/>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    

    }
})

export default Homescreen;