import React from 'react';
import { View, Text, Platform, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Quotation = (props) => {
  const { quoteContainer, quoteStyle, quoterStyle, iconStyle } = styles;
  const { quote, quoter, quoterLink } = props.data;
  //時間がある時に quoterLinkとimageSrc を使って

  return (
    <View style={quoteContainer}>
      <Text style={quoteStyle}> {quote} </Text>

      <Text style={{alignSelf: 'flex-end'}}>
        <Text style={quoterStyle}> ~{quoter} </Text>
        <Icon
          name="user"
          style={iconStyle}
          onPress={ () => Linking.openURL(quoterLink) }
        />
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
    fontStyle: 'italic',
    fontSize: 17,
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'sans-serif',
    fontWeight: '300',
  },
    iconStyle: {
    fontSize: 22,
    padding: 10,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'lightgrey',
    color: 'orange',
  },
}

export default Quotation;