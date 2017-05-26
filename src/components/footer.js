import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import FooterBtn from './footerBtn';

export default class Footer extends Component {
  state = {}; //access via "this.state"

  render(){
    return (
      <View>
        <Text>yooooo, this is from footer.js</Text>
        <FooterBtn/>
        <FooterBtn/>
        <FooterBtn/>
      </View>
    );
  }
}

