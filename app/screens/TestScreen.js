import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { CustomButton } from '../components/MyButton';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  goToSwiper = () => {
    this.props.navigation.navigate('Swiper');
  };

  goToSwipeTest = () => {
    this.props.navigation.navigate('SwipeTest');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <View style={{alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-around'}}>
          <CustomButton onPress={this.goToSwipeTest} text="Swipe Test" />
          <CustomButton onPress={this.goToSwiper} text="Swiper" />
        </View>
      </Container>
    );
  }
}

export default Home;
