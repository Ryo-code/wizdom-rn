import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Platform } from 'react-native';
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
          <Text> So Tiffany said to Joadie that Beth was all like "WHATEVER" about Greg, but Lawny said that Greg's friend John said he said something totally different, like omg!</Text>
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

const styles = {
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'snow',
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
    marginBottom: 10,
  },
  exampleBox: {
    marginTop: 10,
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
    marginTop: 20,
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
    // backgroundColor: 'pink',
    padding: 25,
    marginTop: 50,
    marginBottom: 50,
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
}