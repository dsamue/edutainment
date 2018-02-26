import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, ScrollView, Text, View, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SwipeContainer} from '../components/Container'

const deviceWidth = Dimensions.get('window').width;

class JetlineHog1 extends Component {

  render() {
    return (
      <SwipeContainer>
        <StatusBar translucent={false} barStyle="light-content" />
        <ScrollView horizontal={true} pagingEnabled>
          <SwipeContainer><Text style={styles.text}>1</Text></SwipeContainer>
          <SwipeContainer><Text style={styles.text}>2</Text></SwipeContainer>          
          <SwipeContainer><Text style={styles.text}>3</Text></SwipeContainer>
        </ScrollView>
      </SwipeContainer>
    );
  }
}

const styles = EStyleSheet.create({
  text: {
   color: '$white',
   fontSize: 50,
   fontWeight: '600',
  },
})

export default JetlineHog1;
