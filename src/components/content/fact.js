import React from 'react';
import { View, Text, Platform } from 'react-native';

const Fact = (props) => {
  const { factContainer, textBubble, whiteSpace, factText } = styles;
  return (
    <View style={factContainer}>
      <View style={whiteSpace}/>

      <View style={textBubble}>
        <Text style={factText}> {props.data.factoid} </Text>
      </View>

      <View style={whiteSpace}/>
    </View>
  );
};

const styles = {
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
  whiteSpace: {
    flex: 1,
  },
  textBubble: {
    flex: 2.1,
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
  }
}

export default Fact;