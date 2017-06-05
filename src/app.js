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
    // this.changeState = this.changeState.bind(this);
  state = {
      title: 'definition',
      icon: 'book',
      content: 'contenttttt'
  };

  changeState(selected){
    console.log('"selected" is this...', selected);
    this.setState({
        title: selected.title,
        icon: selected.icon
    });
  }

  render() {
    console.log('this.state ~~>', this.state);
    return (
      <View style={{ flex: 1 }}>
        <Header 
          headerText={this.state.title}
        />
        <Content 
          info={this.state.content}
          // activeTab={this.state.tab}
        />
        <Footer 
          active={this.state.title}
          change={this.changeState.bind(this)}
          buttonIcon={this.state.icon}
        />
      </View>
    )
  }
}
