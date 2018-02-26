import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import TestScreen from '../screens/TestScreen';
import Swiper from '../screens/Swiper';
import SwipeTest from '../screens/SwipeTest';
import List from '../screens/List';
import JetlineHog1 from '../screens/JetlineHog1';

export default StackNavigator({  
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  Swiper: {
    screen: Swiper,
    navigationOptions: {
      header: () => null,
    },
  },
  TestScreen: {
    screen: TestScreen,
    navigationOptions: {
      header: () => null,
    },
  },
  SwipeTest: {
    screen: SwipeTest,
    navigationOptions: {
      header: () => null,
    },
  },
  List: {
    screen: List,
    navigationOptions: {
      header: () => null,
    },
  },
  JetlineHog1: {
    screen: JetlineHog1,
    navigationOptions: {
      header: () => null,
    },
  },
});
