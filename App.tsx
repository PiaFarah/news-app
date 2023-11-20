

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Homescreen from './src/screens/Homescreen';
import ArticleDetails from './src/components/ArticleDetails';
const Stack=createStackNavigator();
export default function App(){
  return (
    <>
    <Provider store={store}>
    <NavigationContainer>

     <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#bcd39c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
     <Stack.Screen name="Home" component={Homescreen} />
     <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
     </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  </>
  )
}




