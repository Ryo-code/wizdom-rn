import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

export default class Content extends Component {
    constructor(props){
    super(props);
  }

  render(){
    const { wrapper } = styles;
    
    return(
        <ScrollView contentContainerStyle={wrapper}>
          <Text>
            I am from the mighty CONTENT.JS file
          </Text>
          <Text>
            Something should render: { this.props.info }
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
    backgroundColor: 'snow',
    margin: 30,
    bottom: 25
  },
}