import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import FooterBtn from './footerBtn';

export default class Footer extends Component {
  state = {}; //access via "this.state"... "this.setState" updates the state
  //「state」はデータをアップデートするためで、「props」は親から子にデータを送るためだ

  render(){
    const { footerRow } = styles;

    return (
      <View
        style={footerRow}
      >
        <FooterBtn
          btnTitle={"Definition"}
          buttonIcon={"book"}
          isSelected={false}
        />
        <FooterBtn
          btnTitle={"Fact"}
          buttonIcon={"globe"}
          isSelected={false}
        />
        <FooterBtn
          btnTitle={"Quotation"}
          buttonIcon={"quote-right"}
          isSelected={false}
        />
      </View>
    );
  }
}

styles = {
  footerRow: {
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
}