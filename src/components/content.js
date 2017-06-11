import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Platform, Linking } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import Icon from 'react-native-vector-icons/FontAwesome';

//import scraper in this file?

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.renderActive = this.renderActive.bind(this);
    this.renderDefinition = this.renderDefinition.bind(this);
    this.renderFact = this.renderFact.bind(this);
    this.renderQuotation = this.renderQuotation.bind(this);
  }

  renderDefinition(){
    const { WOTD, defContainer, defTypeAndPronunciation, defBox, defType, 
      definitions, exampleText, exampleBox, didYouKnowBox, didYouKnow, 
      factContainer, factText, quoteContainer, quotation, quoter, 
    } = styles;

  contentBGcolour = "white";

    return (
      <View style={defContainer}>
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
          <Text> So Tiffany said to Joadie that Beth was all like "WHATEVER" about Greg, but Lawny said that Greg's friend Billy said he said something totally different, so now I don't know what to think!</Text>
        </Text>
        <ScrollView contentContainerStyle={didYouKnowBox}>
          <Text style={didYouKnow}>Food for Thought - a poem about Whatever: </Text>
          <Text>Whatever is we only know As in our minds we find it so; No staring fact is half so clear As one dim, preconceived idea -- No matter how the fact may glow. Vainly may Truth her trumpet blow To stir our minds; like heavy dough They stick to what they think — won’t hear Whatever is. Our ancient myths in solid row Stand up — we simply have to go And choke each fiction old and dear Before the modest facts appear; Then we may grasp, reluctant, slow, Whatever is.</Text>
          <Text> </Text>
        </ScrollView>
      </View>
    );
  }

  renderFact() {
    const { factContainer, factText } = styles;
    return (
      <View style={factContainer}>
        <Text style={factText}> Babies smile an average of 200 times a day.  The average woman smiles 62 times a day and the average man only 8. </Text>
      </View>
    );
  }

  renderNews() {
    const { 
      newsContainer, newsTitle, newsSource, newsSourceIcon, 
      redditCommentsBox, newsCommentsIcon, newsRdtCommentsLink 
    } = styles;
    return (
      <View style={newsContainer}>  
        <Text style={newsTitle}
          onPress={() => Linking.openURL('http://www.bbc.com/news/live/election-2017-40171454')}
        > 
          Conservative party fail to secure a majority resulting in a hung parliament in the 2017 Election 
        </Text>

        <View style={newsSource}>
          <Text> Source: bbc.co.uk </Text>
          <Icon
            name="arrow-circle-o-right"
            style={newsSourceIcon}
          />
        </View>

        <Text style={redditCommentsBox}>
          <Text>Read what </Text>
          <Text style={newsRdtCommentsLink}
            onPress={() => Linking.openURL('https://iu.reddit.com/r/worldnews/comments/6g6aoq/conservative_party_fail_to_secure_a_majority/')}
          > 
            3456+ Reddit commenters
          </Text>
          <Text> are saying about this story. </Text>
          <Icon
            name="comments-o"
            style={newsCommentsIcon}
          />
        </Text>


      </View>
    );
  }


  renderQuotation() {
    const { WOTD, defContainer, defTypeAndPronunciation, defBox, defType, 
      definitions, exampleText, exampleBox, didYouKnowBox, didYouKnow, 
      factContainer, factText, quoteContainer, quotation, quoter,
    } = styles;

    return (
      <View style={quoteContainer}>
        <Text style={quotation}>
          The fact that we're all connected, the fact that we've got this information space — does change the parameters. 
          It changes the way people live and work. It changes things for good and for bad. 
          But I think, in general, it's clear that most bad things come from misunderstanding, and communication is generally the way to resolve misunderstandings — 
          and the Web's a form of communications — so it generally should be good. 
          But I think, also, we have to watch whether we preserve the stability of the world … We need to look at the whole society and think, "Are we actually thinking about what we're doing as we go forward, and are we preserving the really important values that we have in society? 
          Are we keeping it democratic, and open, and so on?"        
        </Text>
        <Text style={quoter}> ~ Tim Berners-Lee </Text>
      </View>
    );
  }

  renderActive(){
    switch (this.props.current) {
      case 'definition':
        console.log('Activated: definition')
        return this.renderDefinition();
        break;
      case 'fact':
        console.log('Activated: fact')
        return this.renderFact();
        break;
      case 'news':
        console.log('Activated: news')
        return this.renderNews();
        break;
      case 'quotation':
        console.log('Activated: quotation')
        return this.renderQuotation();
        break;
      default:
        return this.renderDefinition();
    }
  }

  render() {
    const { wrapper } = styles;
    const Active = this.renderActive;

    return (
      <ScrollView contentContainerStyle={wrapper}>
        <Active />
      </ScrollView>
    );
  }
}

let contentBGcolour = "white";

const styles = {
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: contentBGcolour,
    marginTop: 25,
    marginBottom: 30,
    bottom: 25,
    flex: 1,
  },
  defContainer:{
    marginLeft: 15,
    marginRight: 15,
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
    color: '#EA5F02',
    fontWeight: '100',
  },
  defType: {
    fontStyle: 'italic',
  },
  definitions: {
    marginBottom: 5,
  },
  exampleBox: {
    marginTop: 5,
  },
  exampleText: {
    fontWeight: '700',
    color: 'orange',
    fontFamily: (Platform.OS === 'ios') ? 'AvenirNext-Regular' : 'sans-serif',
    fontSize: 13,
  },
  didYouKnowBox: {
    backgroundColor: 'rgba(240, 240, 240, 240)',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 8,
    marginBottom: 10,
    marginLeft: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: .7,
    shadowRadius: 2,
    shadowColor: 'orange',
  },
  didYouKnow: {
    fontStyle: 'italic',
    fontWeight: '500',
  },
  factContainer: {
    padding: '15%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  factText: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: (Platform.OS === 'ios') ? 'Apple SD Gothic Neo' : 'sans-serif',
  },
  quoteContainer: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 150,
    // paddingBottom: 150,
    // backgroundColor: 'pink',
    // alignSelf: 'stretch',
    // width: '100%',
    // flex: 1,
  },
  quotation: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'sans-serif',
    // width: '100%',
    // alignSelf: 'stretch',
    // flex: 1,
  },
  quoter: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 17,
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'sans-serif',
    fontWeight: '500',
    alignSelf: 'flex-end',
  },
  newsContainer: {
    paddingLeft: '13%',
    paddingRight: '13%',
    justifyContent: 'space-around',
  },
  newsTitle: {
    fontSize: 20,
    // color: 'mediumblue',
    textAlign: 'justify',
    fontWeight: '700',
    lineHeight: 30,
    // textShadowOffset: { width: 3, height: 3 },
    // textShadowRadius: 1,
    // textShadowColor: '#DDDDDD',
  },
  newsSource: {
    marginTop: 10,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  newsSourceIcon:{
    fontSize: 30,
    padding: 10,
    textShadowOffset: { width: 3.5, height: 3.5 },
    textShadowRadius: 1.5,
    textShadowColor: '#DDDDDD',
  },
  newsCommentsIcon: {
    fontSize: 30,
    padding: 10,
    textShadowOffset: { width: 3.5, height: 3.5 },
    textShadowRadius: 1.5,
    textShadowColor: '#DDDDDD',
  },
  redditCommentsBox: {
    fontSize: 15,
  },
  newsRdtCommentsLink: {
    color: 'mediumblue',
    fontWeight: '500',
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 1,
    // textShadowColor: '#DDDDDD',
  },
}
