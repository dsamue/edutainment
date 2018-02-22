import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native';

import styles from './styles';

const MyButton = ({ onPress }) => (
  <Button
    onPress={onPress}
    title="Learn More"
    accessibilityLabel="Learn more about this purple button"
    style={styles.MyButton}
  />
);

MyButton.propTypes = {
  onPress: PropTypes.func,
};

export default MyButton;
