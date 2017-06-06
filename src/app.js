import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
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
    console.log('"selected" is this...', selected);
    this.setState({
        title: selected.title,
        icon: selected.icon,
    });
  };

  render() {
    console.log('this.state ~~>', this.state);
    return (
      <View style={{ flex: 1 }}>
        <Header 
          headerText={this.state.title}
        />
        <Content 
          current={this.state.title}
          info={this.state.content}
        />
        <Footer 
          current={this.state.title}
          change={this.changeState.bind(this)}
          buttonIcon={this.state.icon}
        />
      </View>
    )
  }
}
