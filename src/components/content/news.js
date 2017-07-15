import React from 'react';
import { View, Text, Platform, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const News = (props) => {
  const {
    newsContainer, articleBox, newsBottomHalf, title, abbrevSource, 
    sourceIcon, redditCommentsBox, commentsIcon, numOfCommenters
  } = styles;
  const { articleLink, newsTitle, numOfRedditComments, redditLink, source } = props.data;

  return (
    <View style={newsContainer}>
      <View style={articleBox}>
        <Text style={title}>
          {newsTitle} 
        </Text>

        <View style={abbrevSource}>
          <Text> Source: {source} </Text>
          <Icon
            name="arrow-circle-o-right"
            style={sourceIcon}
            onPress={ () => Linking.openURL(articleLink) }
          />
        </View>
      </View>

      <View>
        <Text style={redditCommentsBox}>
          <Text>Read what</Text>
          <Text style={{fontWeight: '500'}}> {numOfRedditComments}+ </Text>
          <Text>people are saying about this story. </Text>
          <Icon
            name="comments"
            style={commentsIcon}
            onPress={ () => Linking.openURL(redditLink) }
          />
        </Text>
      </View>
    </View>
  );
};

const styles = {
  newsContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#EDEDED',
  },
  articleBox: {
    backgroundColor: 'white',
    marginLeft: '5%',
    marginRight: '5%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'grey',

    /** Shadow effect simulated by corner borders for Android **/
    borderBottomWidth: (Platform.OS === 'ios') ? 1 : 2.5,
    borderRightWidth: (Platform.OS === 'ios') ? 1 : 2,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 3,
    shadowOpacity: .6,
  },
  title: {
    fontSize: 21,
    textAlign: 'justify',
    fontWeight: '500',
    lineHeight: 30,
    fontFamily: (Platform.OS === 'ios') ? 'Iowan Old Style' : 'serif',
  },
  abbrevSource: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sourceIcon:{
    fontSize: 40,
    padding: 1,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'lightgrey',
    color: 'orange',
  },
  commentsIcon: {
    fontSize: 29,
    padding: 10,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'lightgrey',
    color: 'orange',
  },
  redditCommentsBox: {
    fontSize: 15,
    paddingLeft: 40,
    paddingRight: 40,
  },
  numOfCommenters: {
    fontWeight: '500',
  },
}

export default News;