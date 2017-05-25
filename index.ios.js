//Index.ios.js <-- code for iOS!

import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <View>
    <Header headerText={"yo"}/>
    <Text>w00t w00t~~~~!</Text>
    <Text>Let's get this started~~~~!</Text>
  </View>
)

AppRegistry.registerComponent('Wizdom', () => App); //Fat arrow functions w\o {} means "return this..." so "return App"

