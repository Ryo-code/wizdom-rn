import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

export default class Content extends Component {
  render(){
    const { wrapper } = styles;
    
    return(
        <ScrollView contentContainerStyle={wrapper}>
          <Text style={{backgroundColor: 'pink'}}>
            I am from the mighty CONTENT.JS file
          </Text>
        </ScrollView>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    margin: 30,
    bottom: 25
  },
}