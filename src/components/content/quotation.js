import React from 'react';
import { View, Text, Platform, Linking } from 'react-native';

const Quotation = (props) => {
  console.log("props...", props);
  const { quoteContainer, quoteStyle, quoterStyle } = styles;
  const { quote, quoter, quoterLink } = props.data;
  //時間がある時に quoterLinkとimageSrc を使って

  return (
    <View style={quoteContainer}>
      <Text style={quoteStyle}> {quote} </Text>
      <Text 
        style={quoterStyle}
        onPress={ () => Linking.openURL(redditLink) }
      >
        ~{quoter} 
      </Text>
    </View>
  );
};

const styles = {
  quoteContainer: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteStyle: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'sans-serif',
  },
  quoterStyle: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 17,
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'sans-serif',
    fontWeight: '300',
    alignSelf: 'flex-end',
  }
}

export default Quotation;