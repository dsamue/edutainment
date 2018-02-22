import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryGreen',
    width: deviceWidth,
  },
});
