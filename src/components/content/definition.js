import React from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';

const Definition = (props) => {
  // console.log("Props...", props)
  const { WOTD, defMainInfo, defContainer, defTypeAndPronunciation,
    WOTDBox, defType, exampleText, eachExampleBox,
    didYouKnowBox, foodForThought, quoteContainer, quotation, quoter,
  } = styles;

  const { didYouKnow, example1, example2, pronunciation, 
    word, wordType  
  } = props.data;
  console.log("This mofo...", props.data)

  const definitions = props.data.definitions || [];

  // const renderDefinitions =
  console.log('blah', definitions); 


  return (
    <View style={defContainer}>
      <View style={defMainInfo}>
        <ScrollView>
          <View style={WOTDBox}>
            <Text style={WOTD}>{word} </Text>

            <Text style={defTypeAndPronunciation}>
              <Text> {pronunciation}  | </Text>
              <Text style={defType}>{wordType}</Text>
            </Text>
          </View>

          <View>
            {definitions.map((def, i) => <Text key={i}> {def} </Text>)}
          </View>

          <Text style={eachExampleBox}>
            <Text style={exampleText}>Example 1: </Text>
            <Text> {example1} </Text>
          </Text>
          <Text style={eachExampleBox}>
            <Text style={exampleText}>Example 2: </Text>
            <Text> {example2} </Text>
          </Text>
          {/* */}
        </ScrollView>
      </View>

      <View style={didYouKnowBox}>
        <ScrollView>
          <Text style={foodForThought}>Food for Thought </Text>
          <Text style={{ textAlign: "justify" }}>
            {didYouKnow}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = {
  defContainer: {  // Media queryができれば、flex-directionを変えるべき
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
  }
}

export default Definition;