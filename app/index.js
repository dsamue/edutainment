import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

EStyleSheet.build({
  $primaryGreen: '#057038',
  $buttonGreen: '#477853',
  $backgroundGreen: '#D1E9D6',
  $white: '#FFFFFF',
  $outline: 1,
});

export default () => <Navigator />;
