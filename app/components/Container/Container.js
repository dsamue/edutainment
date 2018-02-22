import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
// import { Font } from 'expo';

import styles from './styles';

const Container = ({ children }) => <View style={styles.container}>{children}</View>;

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;

// export default class App extends React.Component {
//   componentDidMount() {
//     Font.loadAsync({
//       'warsaw-gothic': require('../../assets/fonts/warsawgothic.otf'),
//     });
//   }

//   render() {
//     return <Container />;
//   }
// }
