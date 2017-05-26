import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class FooterBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { button, btnText } = styles;

    return (
      <Image
        style={button}
        source={require("../images/button-BG-unselected.jpg")}
      >
        <Text style={btnText}>
          {this.props.btnTitle}

        </Text>
      </Image>
    )
  }
}

const styles = {
  button: {
    backgroundColor: 'orange',
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: .5,
    borderColor: 'firebrick',
    // padding: 2,
  },
  btnText: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'brown',
    fontWeight: '500',
    fontSize: 16,
  }
}