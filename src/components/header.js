//import libraries
import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

// const x = Dimensions.get('window').width; //width of the device

//create a component
const Header = (props) => {
  const { text, container } = styles;
  return (
    // <View style={view}>
    <Image
      source={require("../images/Header-BG.jpg")}
      style={container}
    >
      <Text style={text}> 
        Wizdom: 
        // {props.headerText} 
      </Text>
    </Image>
  )
};

const styles = {
  text: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '700',
    // color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  container: {
    // shadowColor: 'blue',
    // shadowOffset: { width: 0, height: 20 },
    // shadowOpacity: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    // elevation: 2, //z-indexみたいなんでしょうかね。。。
    position: 'relative', //必要なのかなあ
  },

}

//make the component available to other parts of the app
export default Header;