import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import TestScreen from '../screens/TestScreen';
import Swiper from '../screens/Swiper';

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
});
