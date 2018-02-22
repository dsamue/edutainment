import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const IntroText = () => (
  <View style={styles.TextWrapper}>
    <Text style={styles.IntroText}>
      Välkommen till en inspirerande dag på Gröna Lund där du tillsammans med dina elever får
      möjlighet att upptäcka hur spännande fysik, teknik och matematik, kan vara i verkligheten.
    </Text>
  </View>
);

export default IntroText;
