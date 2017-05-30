import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

export default class Header extends Component {
  constructor(props){
    super(props);
  }

  render(){
  const { text, container } = styles;

    return (
      <View>
        <Image
          style={container}
          source={require("../images/Header-BG.jpg")}
        >
          <Text style={text}>
            Wizdom...
            {this.props.headerText}
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