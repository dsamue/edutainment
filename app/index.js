import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

// const screenWidth = Dimensions.get('window');

EStyleSheet.build({
  $primaryGreen: '#057038',
  $buttonGreen: '#477853',
  $backgroundGreen: '#D1E9D6',
  $white: '#FFFFFF',
  // $screenWidth = screenWidth,
  $outline: 1,
});

export default () => <Navigator />;
