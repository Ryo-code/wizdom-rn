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
      console.log("res for DEFINITION!!!!!!!", res)
      this.setState({
        definition: res
      });
      console.log("State!~~~~~>", this.state)
    })

    api.getFactFromDB().then((res) => {
      console.log("res for FACT!!!!!!!", res)
      this.setState({
        fact: res
      });
      console.log("State!~~~~~>", this.state)
    })

    api.getNewsFromDB().then((res) => {
      console.log("res for NEWS!!!!!!!", res)
      this.setState({
        news: res
      });
      console.log("State!~~~~~>", this.state)
    })

    api.getQuotationFromDB().then((res) => {
      console.log("res for QUOTE!!!!!!!", res)
      this.setState({
        quotation: res
      });
      console.log("State!~~~~~>", this.state)
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
