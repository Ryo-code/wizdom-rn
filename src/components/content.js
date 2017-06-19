import React, { Component } from 'react';
import { 
  View, Text, ScrollView, Dimensions, Platform, Linking, LayoutAnimation, UIManager
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.renderActive = this.renderActive.bind(this);
    this.renderDefinition = this.renderDefinition.bind(this);
    this.renderFact = this.renderFact.bind(this);
    this.renderQuotation = this.renderQuotation.bind(this);
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  renderDefinition(){
    const { WOTD, defMainInfo, defContainer, defTypeAndPronunciation, 
      WOTDBox, defType, definitions, exampleText, eachExampleBox, 
      didYouKnowBox, foodForThought, quoteContainer, quotation, quoter, 
    } = styles;

  contentBGcolour = "white";

    return (
      <View style={defContainer}>
        <View style={defMainInfo}>
          <ScrollView>
            <View style={WOTDBox}>
              <Text style={WOTD}>ascetic </Text>
              
              <Text style={defTypeAndPronunciation}>
                <Text> uh-SET-ik | </Text>
                <Text style={defType}>adjective</Text>
              </Text>
            </View>

            <Text style={definitions}> 
              1 : practicing strict self-denial as a measure of personal and especially spiritual discipline 2 : austere in appearance, manner, or attitude 
            </Text>

            <Text style={eachExampleBox}>
              <Text style={exampleText}>Example 1: </Text>
              <Text> The monks have taken a vow of poverty and maintain an ascetic lifestyle within the walls of the monastery.</Text>
            </Text>
            <Text style={eachExampleBox}>
              <Text style={exampleText}>Example 2: </Text>
              <Text> "Moore said most of the calabooses were built in small towns, with local labor and local materials 'as cheap as they could because they didn't need a big jail or have the money for a big jail, and most of the offenders would be drunks.'" — Jim Hardin, Rockwall County Herald-Banner (Greenville, Texas), 28 Oct. 2016</Text>
            </Text>
          </ScrollView>
        </View>

        <View style={didYouKnowBox}>
          <ScrollView>
            <Text style={foodForThought}>Food for Thought </Text>
            <Text style={{textAlign: "justify"}}>
              Ascetic comes from askētikos, a Greek adjective meaning "laborious." Ultimately, it comes from the Greek verb askein, which means "to exercise" or "to work." There aren't many other English words from askein, but there's no dearth of synonyms for ascetic. Severe and austere, for example, are two words that share with ascetic the basic meaning "given to or marked by strict discipline and firm restraint." 
              Ascetic implies abstention from pleasure, comfort, and self-indulgence as spiritual discipline, whereas severe implies standards enforced without indulgence or laxity and may suggest harshness (as in "severe military discipline"). 
              Austere stresses absence of warmth, color, or feeling and may apply to rigorous restraint, simplicity, or self-denial (as in "living an austere life in the country").
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }

  renderFact() {
    const { factContainer, factTextBubble, factWhiteSpace, factText } = styles;
    return (
      <View style={factContainer}>
        <View style={factWhiteSpace}/>

        <View style={factTextBubble}>
          <Text style={factText}> Babies smile an average of 200 times a day. The average woman smiles 62 times a day and the average man only 8. </Text>
        </View>

        <View style={factWhiteSpace}/>
      </View>
    );
  }

  renderNews() {
    const { 
      newsContainer, newsArticleBox, newsBottomHalf, newsTitle, newsSource, newsSourceIcon, 
      newsRedditCommentsBox, newsCommentsIcon, newsNumOfCommenters 
    } = styles;
    return (
      <View style={newsContainer}>  
        <View style={newsArticleBox}>
          <Text style={newsTitle}
          > 
            Conservative party fail to secure a majority resulting in a hung parliament in the 2017 Election 
          </Text>

          <View style={newsSource}>
            <Text> Source: bbc.co.uk </Text>
            <Icon
              name="arrow-circle-o-right"
              style={newsSourceIcon}
              onPress={() => Linking.openURL('http://www.bbc.com/news/live/election-2017-40171454')}
            />
          </View>
        </View>

        <Text style={newsRedditCommentsBox}>
          <Text>Read what</Text>
          <Text style={newsNumOfCommenters}> 3456+ </Text>
          <Text>people are saying about this story. </Text>
          <Icon
            name="comments"
            style={newsCommentsIcon}
            onPress={() => Linking.openURL('https://iu.reddit.com/r/worldnews/comments/6g6aoq/conservative_party_fail_to_secure_a_majority/')}
          />
        </Text>


      </View>
    );
  }


  renderQuotation() {
    const { quoteContainer, quotation, quoter } = styles;

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: contentBGcolour,
    marginTop: 25,
    marginBottom: 30,
    bottom: 25,
  },
  defContainer:{  // Media queryができれば、flex-directionを変えるべき
    // backgroundColor: "pink",
    // flex: 1,
  },
  defMainInfo: {
    paddingLeft: '4%',
    paddingRight: '4%',
    flex: 6,
    // backgroundColor: "yellow",
    justifyContent: "space-around"
    // borderBottomWidth: 1,
  },
  WOTDBox: {
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
  eachExampleBox: {
    marginTop: 5,
  },
  exampleText: {
    fontWeight: '700',
    color: 'orange',
    fontFamily: (Platform.OS === 'ios') ? 'AvenirNext-Regular' : 'sans-serif',
    fontSize: 13,
  },
  didYouKnowBox: {
    flex: 3,
    backgroundColor: 'rgba(240, 240, 240, 240)',
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: .5,
    marginTop: 5,
    marginRight: '4%',
    marginBottom: 10,
    marginLeft: '4%',
    alignItems: 'center',
    justifyContent: 'center',

    /** Shadow effect simulated by corner borders for Android (for iOS, shadow props are used) **/
    borderBottomWidth: (Platform.OS === 'ios') ? 0 : 2.5,
    borderRightWidth: (Platform.OS === 'ios') ? 0 : 2,
    borderColor: (Platform.OS === 'ios') ? 'rgba(252, 181, 2, 0)' : 'rgba(252, 181, 2, .5)',
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: .7,
    shadowRadius: 1.5,
    shadowColor: 'orange',
  },
  foodForThought: {
    fontStyle: 'italic',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 15,
  },
  factContainer: {
    flex: 1,
  },
  factText: {
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: (Platform.OS === 'ios') ? 'Apple SD Gothic Neo' : 'sans-serif',
  },
  factWhiteSpace: {
    flex: 1,
  },
  factTextBubble: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 180,
    borderWidth: 3,
    borderStyle: 'dotted',
    borderColor: 'orange',
  },
  quoteContainer: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quotation: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'sans-serif',
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
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#EDEDED',
  },
  newsArticleBox: {
    backgroundColor: 'white',
    marginLeft: '5%',
    marginRight: '5%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'grey',

    /** Shadow effect simulated by corner borders for Android **/
    borderBottomWidth: (Platform.OS === 'ios') ? 1 : 2.5,
    borderRightWidth: (Platform.OS === 'ios') ? 1 : 2,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 3,
    shadowOpacity: .6,
  },
  newsTitle: {
    fontSize: 21,
    textAlign: 'justify',
    fontWeight: '500',
    lineHeight: 30,
    fontFamily: (Platform.OS === 'ios') ? 'Iowan Old Style' : 'serif',
  },
  newsSource: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  newsSourceIcon:{
    fontSize: 40,
    padding: 1,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'lightgrey',
    color: 'orange',
  },
  newsCommentsIcon: {
    fontSize: 29,
    padding: 10,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'lightgrey',
    color: 'orange',
  },
  newsRedditCommentsBox: {
    fontSize: 15,
    alignSelf: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  newsNumOfCommenters: {
    fontWeight: '500',
  },
}
