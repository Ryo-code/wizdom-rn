import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Platform } from 'react-native';
//import scraper in this file?

export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { wrapper, WOTD, defTypeAndPronunciation, defBox, defType, definitions, 
      exampleText, exampleBox, 
      didYouKnowBox, didYouKnow } = styles;

    let showDefinition = () => {
      return (
        <View style={{marginBottom: 75}}>
          <View style={defBox}>
            <Text style={WOTD}>whatever </Text>
            <Text style={defTypeAndPronunciation}>
              <Text> what·ev·er | </Text>
              <Text style={defType}>pronoun</Text>
            </Text>
          </View>
          <Text style={definitions}>
            <Text>a : anything or everything that take whatever you want </Text>
            <Text> | b : no matter what whatever he says, they won't believe him</Text>
            <Text> | c : whatnot enjoys skiing, hiking, or whatever</Text>
          </Text>
          <Text style={exampleBox}>
            <Text style={exampleText}>Example 1: </Text>
            <Text> I asked how his day was and all he said was "whatever..." it's so annoying!</Text>
          </Text>
          <Text style={exampleBox}>
            <Text style={exampleText}>Example 2: </Text>
            <Text> So Tiffany said to Joadie that Beth was all like "WHATEVER" about Greg, but Lawny said that Greg's friend John said he said something totally different, like omg!</Text>
          </Text>
          <View style={didYouKnowBox}>
            <Text style={didYouKnow}>Food for Thought - a poem about Whatever: </Text>
            <Text> "Whatever is we only know As in our minds we find it so; No staring fact is half so clear As one dim, preconceived idea -- No matter how the fact may glow. Vainly may Truth her trumpet blow To stir our minds; like heavy dough They stick to what they think — won’t hear Whatever is. Our ancient myths in solid row Stand up — we simply have to go And choke each fiction old and dear Before the modest facts appear; Then we may grasp, reluctant, slow, Whatever is." </Text>
          </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'snow',
    margin: 30,
    bottom: 25,
  },
  defBox: {
    borderColor: 'orange',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  WOTD: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: (Platform.OS === 'ios') ? 'Iowan Old Style' : 'serif',
  },
  defTypeAndPronunciation: {
    textAlign: 'center',
    color: 'firebrick',
    fontWeight: '100',
  },
  defType: {
    fontStyle: 'italic',
  },
  definitions: {
    // marginTop: 10,
    marginBottom: 10,
  },
  exampleBox: {
    marginTop: 10,
  },
  exampleText: {
    fontWeight: '700',
    color: 'orange',
    fontFamily: (Platform.OS === 'ios') ? 'AvenirNext-Regular' : 'serif',
    fontSize: 13,
  },
  didYouKnowBox: {
    marginTop: 20,
    backgroundColor: 'rgba(240, 240, 240, 240)',
    padding: 10,
    borderRadius: 10,
  },
  didYouKnow: {
    fontStyle: 'italic',
    fontWeight: '500'
  },
}