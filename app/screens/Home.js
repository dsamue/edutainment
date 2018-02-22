import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { IntroText } from '../components/Text';
import { Logo } from '../components/Logo';
import { CustomButton } from '../components/MyButton';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleFirstButtonPress = () => {
    this.props.navigation.navigate('TestScreen');
    // console.warn('Button clicked! (Test av console.warn) ');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <IntroText />
        {/* <MyButton onPress={this.handleFirstButtonPress} /> */}
        <CustomButton onPress={this.handleFirstButtonPress} text="Kom igång!" />
      </Container>
    );
  }
}

export default Home;
