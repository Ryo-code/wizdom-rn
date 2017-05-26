//import libraries
import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

// const x = Dimensions.get('window').width; //width of the device

//create a component
const Header = (props) => {
  const { text, container } = styles;
  return (
    <View>
      <Image
        style={container}
        source={require("../images/Header-BG.jpg")}
      >
        <Text style={text}> 
          Wizdom... 
          {props.headerText} 
        </Text>
      </Image>
    </View>
  )
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

//make the component available to other parts of the app
export default Header;