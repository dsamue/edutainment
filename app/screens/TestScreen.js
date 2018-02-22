import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { CustomButton } from '../components/MyButton';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  goToHome = () => {
    this.props.navigation.navigate('Home');
    // console.warn('Button clicked! (Test av console.warn) ');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <CustomButton onPress={this.goToHome} text="TestScreen" />
      </Container>
    );
  }
}

export default Home;
