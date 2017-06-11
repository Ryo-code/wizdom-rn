import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/header';
import Footer from './src/components/footer';
import Content from './src/components/content';
// NOTE:
// pass state to content, 
// put `if statement` in render function to render 'active' stuff
// pass function to footer

export default class App extends Component {
  state = {
    title: 'definition',
  };

  // ON BUTTON PRESS
  changeState(selected){
    // console.log('"selected" is this...', selected);
    this.setState({
        title: selected.title,
    });
  };

  render() {
    // console.log('this.state ~~>', this.state);
    return (
      <View style={{ flex: 1 }}>
        <Header 
          headerText={this.state.title}
        />
        <Content 
          current={this.state.title}
        />
        <Footer 
          current={this.state.title}
          change={this.changeState.bind(this)}
        />
      </View>
    )
  }
}