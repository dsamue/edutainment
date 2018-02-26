import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const SwipeContainer = ({ children }) => <View style={styles.SwipeContainer}>{children}</View>;

SwipeContainer.propTypes = {
  children: PropTypes.any,
};

export default SwipeContainer;
