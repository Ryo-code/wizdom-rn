//Index.ios.js <-- code for iOS!

import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/header';
import Footer from './src/components/footer';
import Content from './src/components/content';

const App = () => (
  <View>
    <Header headerText={"yo"}/>
    <Text>w00t w00t~~~~!</Text>
    <Content/>
    <Text>Let's get this started~~~~!</Text>
    <Footer/>
  </View>
)

AppRegistry.registerComponent('Wizdom', () => App); //Fat arrow functions w\o {} means "return this..." so "return App"

