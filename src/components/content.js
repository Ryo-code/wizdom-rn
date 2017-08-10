import React, { Component } from 'react';
import { ScrollView, Platform, LayoutAnimation, UIManager } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Fact from './content/fact';
import News from './content/news';
import Quotation from './content/quotation';
import Word from './content/word';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.renderActive = this.renderActive.bind(this);
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  renderActive(){
    switch (this.props.current) {
      case 'word':
        console.log('Activated: word');
        return <Word data={this.props.wordData}/>        
        break;
      case 'fact':
        console.log('Activated: fact');
        return <Fact data={this.props.factData}/>        
        break;
      case 'news':
        console.log('Activated: news');
        return <News data={this.props.newsData}/>        
        break;
      case 'quotation':
        console.log('Activated: quotation');
        return <Quotation data={this.props.quotationData}/>
        break;
      default:
        return <Word data={this.props.wordData}/>
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

const styles = {
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 30,
    bottom: 25,
  }
}
