import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


export default class FlatListBasics extends Component {

    static propTypes = {
        navigation: PropTypes.object,
      };
    
    goToExercise = (item) => {
        this.props.navigation.navigate(item.screen);
      };

    test = (item) => {
        // console.warn(item.key);
    };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Uppgifter</Text>
            <FlatList
            data={[
                {key: 'Uppgift 1', screen: 'SwipeTest'},
                {key: 'Uppgift 2', screen: 'SwipeTest'},
                {key: 'Uppgift 3', screen: 'SwipeTest'},
            ]}
            renderItem={({item}) => <Text style={styles.item} onPress={ () => {this.goToExercise(item)}}>{item.key}</Text>}
            />
    </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: '$primaryGreen',
  },
  heading: {
      fontSize:24,
      height: 60,
      fontWeight: '600',
      alignSelf: 'center',
      paddingTop: 20,
      color: '$white',
  },
  item: {
    padding: 15,
    fontSize: 20,
    height: 44,
    color:'$white',
    // borderBottom: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: 20,

  },
})
