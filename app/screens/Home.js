import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, View, Image, TouchableOpacity } from 'react-native';

import { Container } from '../components/Container';
import { IntroText } from '../components/Text';
import { Logo } from '../components/Logo';
import { CustomButton, MenuButton } from '../components/MyButton';


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
        <MenuButton onPress={this.goToList} />
        <Logo />
        <IntroText />
        <CustomButton onPress={this.goToTest} text="Kom igång!" />
      </Container>
    );
  }
}

export default Home;
