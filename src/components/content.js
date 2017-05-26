import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Content extends Component {
  componentWillMount(){
    console.log("componentWillMount has just run inside content.js");
  }

  render(){
    return(
      <View>
        <Text> 
          I am from the mighty CONTENT.JS file
        </Text>
      </View>
    );
  }
}
