'use strict';

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Footer extends Component {
  render() {
    const {
      footerRow, wrapper, buttonBG,
      btnContent, btnText, btnIcon
    } = styles;

    const capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const tabs = [
      {
          title: 'definition',
          icon: 'book',
      }, {
          title: 'fact',
          icon: 'globe',
      }, {
          title: 'quotation',
          icon: 'quote-right',
      }
    ];

    const showDarkBGifActive = (tab) => {
      let tabBG = require("../images/button-BG-unselected.jpg");
      if(this.props.current === tab.title){
        tabBG = require("../images/button-BG-selected.jpg");
      }
      return tabBG;
    };

    return (
      <View style={footerRow}>
        {
          tabs.map((tab) => 
          <Image style={buttonBG}
            source={showDarkBGifActive(tab)}
            btnTitle={tab.title}
            buttonIcon={tab.icon}
            key={tab.icon.length}
          >
            <TouchableOpacity 
              style={btnContent}
              onPress={() => this.props.change(tab)}
            >
              <Icon
                name={tab.icon}
                style={btnIcon}
              />
              <Text style={btnText}> {capitalize(tab.title)} </Text>
            </TouchableOpacity>
          </Image>
          )
        }
      </View>
    );
  }
}

const styles = {
  footerRow: {
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
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
    // shadowOffset: { width: 2, height: 2 },
    // shadowOpacity: .5,
    // shadowRadius: 3,
    // shadowColor: 'brown',
    paddingLeft: '27%',
    paddingRight: '27%',
  },
  btnText: {
    color: 'brown',
    fontWeight: '500',
    fontSize: 10,
    textAlign: 'center'
  },
  btnIcon: {
    alignSelf: 'center',
    color: 'brown',
    fontSize: 27,
    marginBottom: 5,
  },
}
