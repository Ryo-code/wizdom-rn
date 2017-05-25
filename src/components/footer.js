import React from 'react';
import { View, Text, Image } from 'react-native';
import FooterBtn from './footerBtn';

const Footer = (props) => {

  return (
    <View>
      <Text>yooooo, this is from footer.js</Text>
      <FooterBtn/>
      <FooterBtn/>
      <FooterBtn/>
    </View>
  )
}

export default Footer;