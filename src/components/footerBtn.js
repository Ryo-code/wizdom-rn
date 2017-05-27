import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FooterBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }

  render() {
    const { wrapper, buttonBG, btnContent, btnText, btnIcon } = styles;

    return (
      <Image
        style={buttonBG}
        source={require("../images/button-BG-unselected.jpg")}
      >
        <TouchableOpacity style={btnContent}>

          <Icon
            name={this.props.buttonIcon}
            style={btnIcon}
          />
          <Text style={btnText}> {this.props.btnTitle} </Text>
        </TouchableOpacity>
      </Image>
    )
  }
}

const styles = {
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBG: {
    flex: 1,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: .5,
    borderColor: 'firebrick',
  },
  btnContent: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'space-between',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .5,
    shadowRadius: 3,
    shadowColor: 'brown',
    paddingLeft: '27%',
    paddingRight: '27%',
  },
  btnText: {
    color: 'brown',
    fontWeight: '500',
    fontSize: 10,
  },
  btnIcon: {
    alignSelf: 'center',
    color: 'brown',
    fontSize: 27,
    marginBottom: 5,
  }
}