import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
//import scraper in this file?

export default class Content extends Component {
    constructor(props){
    super(props);
  }

  render(){


    const tabs = [
      {
          title: 'definition',
          content: 'The meaning of the word "stuff" is WHATEVER',
      }, {
          title: 'fact',
          content: 'Stuff happens nine out of ten times per day for the average mammal',
      }, {
          title: 'quotation',
          content: 'Stuff is to things what people are to whatever... -Martin Whatevs',
      }
    ];

    const { wrapper } = styles;
    
    return(
        <ScrollView contentContainerStyle={wrapper}>
          <Text>
            {tabs[0].content}
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