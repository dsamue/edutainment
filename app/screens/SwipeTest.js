import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, ScrollView, Text, View, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import { Container } from '../components/Container'

const deviceWidth = Dimensions.get('window').width;

class SwipeTest extends Component {

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <ScrollView horizontal={true} pagingEnabled>
          <View style={{flex: 1, backgroundColor:'red', width:deviceWidth, alignItems: 'center', justifyContent:'center'}}><Text style={styles.text}>1</Text></View>
          <View style={{flex: 1, backgroundColor:'orange', width:deviceWidth, alignItems: 'center', justifyContent:'center'}}><Text style={styles.text}>2</Text></View>
          <Container><Text style={styles.text}>3</Text></Container>
        </ScrollView>
      </Container>
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

export default SwipeTest;
