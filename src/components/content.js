import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
//import scraper in this file?

export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let showDefinition = () => {
      return (
        <View>
          <Text> Word of the day: STUFF </Text>
          <Text> (noun) </Text>
          <Text> Definition: The meaning of the word "stuff" is WHATEVER </Text>
          <Text> Example 1: "Hey, I like yer stuff" </Text>
          <Text> Example 2: "Get your stuff out of my face!" </Text>
        </View>
      );
    };

    let showFact = () => {
      return (
        <View>
          <Text> Stuff happens nine 9 out of 10 times per day for the average mammal </Text>
        </View>
      );
    };

    let showQuotation = () => {
      return (
        <View>
          <Text> Stuff is to things as people are to whatever... </Text>
          <Text> -Martin Whatevs </Text>
        </View>
      );
    };

    const tabs = [
      {
        title: 'definition',
        content: showDefinition(),
      }, {
        title: 'fact',
        content: showFact(),
      }, {
        title: 'quotation',
        content: showQuotation(),
      }
    ];

    const renderContentIfActive = (tab) => {
      {console.log("    tab~~~~~~~~~!!!", tab.title)}
      {console.log("current=========!!!", this.props.current)}
      if(this.props.current === tab.title) {
        console.log("It's a match!");
        let currentContent = tab.content;
        return currentContent;
      }
    };

    const { wrapper } = styles;

    return (
      <ScrollView contentContainerStyle={wrapper}>
        {
          renderContentIfActive(tabs[0])

          // for (var i = 0; i < tabs.length; i++){
          //   renderContentIfActive(tab[i]);
          // }
          
          // tabs.forEach((tab) => {
          //   renderContentIfActive(tab);
          // })
        }
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