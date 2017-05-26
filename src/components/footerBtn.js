import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class FooterBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { button, btnContent, btnText, btnIcon } = styles;

    return (
      <Image
        style={button}
        source={require("../images/button-BG-unselected.jpg")}
      >
        <View style={btnContent}>
          <Icon 
            name='add-user' 
            // allowFontScaling
            size={30}
            style={btnIcon}
          />
          <Text style={btnText}>
            {this.props.btnTitle}
          </Text>

        </View>
      </Image>
    )
  }
}

const styles = {
  button: {
    backgroundColor: 'orange',
    flex: 1,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: .5,
    borderColor: 'firebrick',
    // padding: 2,
  },
  btnContent:{
    backgroundColor: 'rgba(0, 0, 0, 0)',
    // paddingTop: 20,
    // paddingBottom: 20,
  },

  btnText: {
    color: 'brown',
    fontWeight: '500',
    fontSize: 16,
  },
  btnIcon: {
    alignSelf: 'center',
  }

}