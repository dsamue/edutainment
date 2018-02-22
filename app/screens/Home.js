import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, View, Image, TouchableOpacity } from 'react-native';

import { Container } from '../components/Container';
import { IntroText } from '../components/Text';
import { Logo } from '../components/Logo';
import { CustomButton } from '../components/MyButton';


class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  goToTest = () => {
    this.props.navigation.navigate('TestScreen');
  };

  goToList = () => {
    this.props.navigation.navigate('List');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <TouchableOpacity 
          style={{position: 'absolute', left:15, top:30}} 
          onPress={this.goToList}>
            <Image
            style={{ width: 30, height: 30}}
            source={require('../icons/hamburger.png')}
          />
        </TouchableOpacity>
        <Logo />
        <IntroText />
        <CustomButton onPress={this.goToTest} text="Kom igång!" />
      </Container>
    );
  }
}

export default Home;
