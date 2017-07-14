import React from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';

const Definition = () => {
  const { WOTD, defMainInfo, defContainer, defTypeAndPronunciation,
    WOTDBox, defType, definitions, exampleText, eachExampleBox,
    didYouKnowBox, foodForThought, quoteContainer, quotation, quoter,
    } = styles;

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
          <Text style={{ textAlign: "justify" }}>
            Ascetic comes from askētikos, a Greek adjective meaning "laborious." Ultimately, it comes from the Greek verb askein, which means "to exercise" or "to work." There aren't many other English words from askein, but there's no dearth of synonyms for ascetic. Severe and austere, for example, are two words that share with ascetic the basic meaning "given to or marked by strict discipline and firm restraint."
              Ascetic implies abstention from pleasure, comfort, and self-indulgence as spiritual discipline, whereas severe implies standards enforced without indulgence or laxity and may suggest harshness (as in "severe military discipline").
              Austere stresses absence of warmth, color, or feeling and may apply to rigorous restraint, simplicity, or self-denial (as in "living an austere life in the country").
            </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Definition;

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
  }
}