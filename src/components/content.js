import React, { Component } from 'react';
import { ScrollView, Platform, LayoutAnimation, UIManager } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Definition from './content/definition';
import Fact from './content/fact';
import News from './content/news';
import Quotation from './content/quotation';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.renderActive = this.renderActive.bind(this);
    // this.renderDefinition = this.renderDefinition.bind(this);
    // this.renderFact = this.renderFact.bind(this);
    // this.renderQuotation = this.renderQuotation.bind(this);
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  renderActive(){
    switch (this.props.current) {
      case 'definition':
        console.log('Activated: definition')
        return <Definition/>        
        // return this.renderDefinition();
        break;
      case 'fact':
        console.log('Activated: fact')
        return <Fact/>        
        // return this.renderFact();
        break;
      case 'news':
        console.log('Activated: news')
        return <News/>        
        // return this.renderNews();
        break;
      case 'quotation':
        console.log('Activated: quotation')
        return <Quotation/>
        // return this.renderQuotation();
        break;
      default:
        return <Definition/>
        // return this.renderDefinition();
    }
  }

  render() {
    const { wrapper } = styles;
    const Active = this.renderActive;

    return (
      <ScrollView contentContainerStyle={wrapper}>
        <Active />
      </ScrollView>
    );
  };
};

// let contentBGcolour = "white";

const styles = {
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    marginTop: 25,
    marginBottom: 30,
    bottom: 25,
  }
}
