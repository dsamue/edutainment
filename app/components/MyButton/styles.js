// import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  MyButton: {
    color: 'white',
    backgroundColor: '$white',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '$white',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 50,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: '$primaryGreen',
    fontSize: 20,
    // paddingVertical: 20,
    fontWeight: '800',
  },
});
