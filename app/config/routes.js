import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import TestScreen from '../screens/TestScreen';

export default StackNavigator({
  Home: {
    screen: Home,
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
