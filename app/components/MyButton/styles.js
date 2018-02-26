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
  text: {
    color: '$primaryGreen',
    fontSize: 20,
    fontWeight: '800',
  },
  hamburgerIcon: {
    width: 30, 
    height: 30,
  },
  hamburgerIconWrapper: {
    position: 'absolute', 
    left: 15, 
    top: 30,
  },
});
