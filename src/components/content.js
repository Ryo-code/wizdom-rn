import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Platform, Linking } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

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
        <Text style={factText}> Penguins swim up to 3,100 miles in a year </Text>
      </View>
    );
  }

  renderNews() {
    const { newsContainer, newsTitle, newsSource, newsRdtCommentsLink } = styles;
    return (
      <View style={newsContainer}>  
        <Text style={newsTitle}
          onPress={() => Linking.openURL('http://www.bbc.com/news/live/election-2017-40171454')}
        > 
          Conservative party fail to secure a majority resulting in a hung parliament in the 2017 Election 
        </Text>

        <Text style={newsSource}> Source: bbc.co.uk </Text>

        <Text>
          <Text>Read what </Text>
          <Text style={newsRdtCommentsLink}
            onPress={() => Linking.openURL('https://iu.reddit.com/r/worldnews/comments/6g6aoq/conservative_party_fail_to_secure_a_majority/')}
          > 
            3456+ Reddit commenters
          </Text>
          <Text> are saying about this story.</Text>
        </Text>
      </View>
    );
  }

// export const parseAndReplace = () =>
//   <Hyperlink
//     linkStyle={ { color: '#2980b9', fontSize: 20 } }
//     linkText={ url => url === 'https://github.com/obipawan/hyperlink' ? 'Hyperlink' : url }
//   >
//     <Text style={ { fontSize: 15 } }>
//       Make clickable strings cleaner with https://github.com/obipawan/hyperlink
//     </Text>
//   </Hyperlink>


  renderQuotation() {
    const { WOTD, defContainer, defTypeAndPronunciation, defBox, defType, 
      definitions, exampleText, exampleBox, didYouKnowBox, didYouKnow, 
      factContainer, factText, quoteContainer, quotation, quoter,
    } = styles;
    
    return (
      <View style={quoteContainer}>
        <Text style={quotation}>We only have to look around us to see how complexity and psychic temperature are still rising: and rising no longer on the scale of the individual but now on that of the planet. This indication is so familiar to us that we cannot but recognize the objective, experiential, reality of a transformation of the planet as a whole.</Text>
        <Text style={quoter}> ~ Pierre Teilhard de Chardin </Text>
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
    marginLeft: 20,
    marginRight: 20,
    // marginTop: 0,
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
    // marginTop: 10,
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
    padding: 13,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 1,
    marginRight: 10, 
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
    padding: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  factText: {
    fontSize: 25,
    lineHeight: 55,
    textAlign: 'center',
    fontWeight: '900',
    fontFamily: (Platform.OS === 'ios') ? 'Apple SD Gothic Neo' : 'sans-serif',
  },
  quoteContainer: {
    padding: 25,
    marginTop: 50,
    marginBottom: 50,
    flex: 1,
  },
  quotation: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'sans-serif',
  },
  quoter: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 18,
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'sans-serif',
    fontWeight: '400'
  },
  newsContainer: {
    // flex: 1,
    backgroundColor: 'snow',
    paddingLeft: '15%',
    paddingRight: '15%',
    justifyContent: 'space-around',
  },
  newsTitle: {
    // backgroundColor: 'pink',
    fontSize: 20,
    color: 'mediumblue',
    fontWeight: '700',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1,
    textShadowColor: '#DDDDDD',
  },
  newsSource: {
    // backgroundColor: 'yellow',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  newsRdtCommentsLink: {
    // backgroundColor: 'orange',
    color: 'mediumblue',
    fontWeight: '500',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: '#DDDDDD',
  },
  
}
