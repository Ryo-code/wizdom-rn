import React from 'react';
import { 
  View, Text, ScrollView, Dimensions, Platform, Linking, LayoutAnimation, UIManager
} from 'react-native';

const Quotation = () => {
  const { quoteContainer, quoteStyle, quoterStyle } = styles;

  return (
    <View style={quoteContainer}>
      <Text style={quoteStyle}>
        The fact that we're all connected, the fact that we've got this information space — does change the parameters. 
        It changes the way people live and work. It changes things for good and for bad. 
        But I think, in general, it's clear that most bad things come from misunderstanding, and communication is generally the way to resolve misunderstandings — 
        and the Web's a form of communications — so it generally should be good. 
        But I think, also, we have to watch whether we preserve the stability of the world … We need to look at the whole society and think, "Are we actually thinking about what we're doing as we go forward, and are we preserving the really important values that we have in society? 
        Are we keeping it democratic, and open, and so on?"        
      </Text>
      <Text style={quoterStyle}> ~ Tim Berners-Lee </Text>
    </View>
  );
}

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
    fontWeight: '500',
    alignSelf: 'flex-end',
  },
}

export default Quotation;