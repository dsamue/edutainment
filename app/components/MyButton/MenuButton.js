import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, View, Image, TouchableOpacity } from 'react-native';

class MenuButton extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  goToList = () => {
    this.props.navigation.navigate('List');
  };

  render() {
    return (
        <TouchableOpacity 
          style={{position: 'absolute', left:15, top:300}} 
          onPress={this.goToList}>
            <Image
            style={{ width: 30, height: 30}}
            source={require('../../icons/hamburger.png')}
          />
        </TouchableOpacity>
    );
  }
}

export default MenuButton;
