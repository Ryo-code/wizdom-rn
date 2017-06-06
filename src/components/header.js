import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("Hi, I'm from the HEADER file");

    const { text, container } = styles;
    const capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
      <View>
        <Image
          style={container}
          source={require("../images/Header-BG.jpg")}
        >
          <Text style={text}>
            {capitalize(this.props.headerText)} of the Day
          </Text>
        </Image>
      </View>
    )
  }
};

const styles = {
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '700',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
  },
}