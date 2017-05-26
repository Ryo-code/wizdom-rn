import React from 'react';
import { View, Text, Image } from 'react-native';

const FooterBtn = (props) => {

  const { button, btnText } = styles;
  return (
    <Image 
      style={button}
      source={require("../images/button-BG-unselected.jpg")}
    >
      <Text style={btnText}> 
        {props.btnTitle} 
      </Text>
    </Image>
  )
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
  },
  btnText: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'brown',
    fontWeight: '500',
    fontSize: 16,
  }
}

export default FooterBtn;