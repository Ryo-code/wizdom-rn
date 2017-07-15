import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import api from './utilities/api';

export default class App extends Component {
  state = {
    title: 'definition',
    definition: {},
    fact: {},
    news: {},
    quotation: {}
  };

  componentWillMount(){
    api.getDefinitionFromDB().then((res) => {
      this.setState({
        definition: res
      });
    })

    api.getFactFromDB().then((res) => {
      this.setState({
        fact: res
      });
    })

    api.getNewsFromDB().then((res) => {
      this.setState({
        news: res
      });
    })

    api.getQuotationFromDB().then((res) => {
      this.setState({
        quotation: res
      });
    })
  }

  // ON BUTTON PRESS
  changeState(selected) {
    this.setState({
      title: selected.title,
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          headerText={this.state.title}
        />
        <Content
          current={this.state.title}
          definitionData={this.state.definition}
          factData={this.state.fact}
          newsData={this.state.news}
          quotationData={this.state.quotation}
        />
        <Footer
          current={this.state.title}
          change={this.changeState.bind(this)}
        />
      </View>
    );
  }
};
