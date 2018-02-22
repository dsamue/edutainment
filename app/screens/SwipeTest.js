import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, ScrollView, Text, View, Dimensions } from 'react-native';

import { Container } from '../components/Container'

const deviceWidth = Dimensions.get('window').width;

class SwipeTest extends Component {

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <ScrollView horizontal={true} pagingEnabled>
          <View style={{flex: 1, backgroundColor:'red', width:deviceWidth}}></View>
          <View style={{flex: 1, backgroundColor:'yellow', width:deviceWidth}}></View>
          <Container />
        </ScrollView>
      </Container>
    );
  }
}

export default SwipeTest;
