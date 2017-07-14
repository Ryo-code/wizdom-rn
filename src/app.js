import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import api from './utilities/api';

export default class App extends Component {
  state = {
    title: 'definition',
    fact: {}
  };

  componentWillMount(){
    api.getFactFromAPI().then((res) => {
      console.log("res!!!!!!!", res)
      this.setState({
        fact: res
      })
    })
  }

  // ON BUTTON PRESS
  changeState(selected) {
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
