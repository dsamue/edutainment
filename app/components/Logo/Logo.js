import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

const Logo = () => (
  <Image
    style={styles.logo}
    source={require('../../images/grona-lund-logo.png')}
    // source={require('../../images/test.png')}
  />
);

export default Logo;
