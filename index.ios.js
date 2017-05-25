//Index.ios.js <-- code for iOS!

//Import a library to help create a component
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

//Create a component
const App = () => (
  <View>
    <Text>w00t w00t~~~~!</Text>
    <Text>Let's get this started~~~~!</Text>
  </View>
)

//Render it to the device
AppRegistry.registerComponent('Wizdom', () => App);
//Fat arrow functions w\o {} means "return this..." so "return App"

