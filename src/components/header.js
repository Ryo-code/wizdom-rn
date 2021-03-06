import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
    );
  };
};

const styles = {
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: .5,
    borderColor: 'firebrick',
  },
  text: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: '700',
    color: 'brown',
    backgroundColor: 'rgba(0,0,0,0)',
  },
}