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
          btnTitle={"Fact"}
          btnIcon={"ICON"}
        />
        <FooterBtn
          btnTitle={"Definition"}
          btnIcon={"ICON"}
        />
        <FooterBtn
          btnTitle={"Quotation"}
          btnIcon={"ICON"}
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
    // borderWidth: 3,
    // borderColor: "blue",
    // // height: 150
  },
}