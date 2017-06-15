// import React, { Component } from 'react';
// import { View, Text, AppRegistry } from 'react-native';
// import Header from './src/components/header';
// import Footer from './src/components/footer';
// import Content from './src/components/content';

// export default class App extends Component {
//   state = {
//     title: 'definition',
//   };

//   changeState(selected){
//     this.setState({
//         title: selected.title,
//     });
//   };

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <Header 
//           headerText={this.state.title}
//         />
//         <Content 
//           current={this.state.title}
//         />
//         <Footer 
//           current={this.state.title}
//           change={this.changeState.bind(this)}
//         />
//       </View>
//     )
//   }
// }
