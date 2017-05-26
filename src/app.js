import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={"yo"}/>
    <Content/>
    <Footer/>
  </View>
)

export default App;
