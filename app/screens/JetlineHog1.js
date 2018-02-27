import PropTypes from "prop-types";
import React, { Component } from "react";
import { StatusBar, ScrollView, Text, View, Dimensions, TextInput,KeyboardAvoidingView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { SwipeContainer } from "../components/Container";
import containerStyles from "../components/Container/styles";

const deviceWidth = Dimensions.get("window").width;

class JetlineHog1 extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <SwipeContainer>
        <ScrollView horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false}>
          <SwipeContainer>
            <View style={[{flex:0.2, justifyContent: 'center', alignItems:'center'}]}>
              <Text style={styles.headerText}>Jetline</Text>
              <Text style={styles.subHeaderText}>Åk, känn efter och undersök</Text>
            </View>
            <View style={[{flex:0.8}, styles.textWrapper]}>
              <Text style={[styles.greyText, styles.bullet]}>
                {`\u2022 `}Hur får man stopp på ett berg- och dalbanetåg?
              </Text>
              <Text style={[styles.greyText, styles.bullet]}>
                {`\u2022 `}Vilka typer av bromsar finns det och hur fungerar de?
              </Text>
              <Text style={[styles.greyText, styles.bullet]}>
                {`\u2022 `}Hur fungerar en mekanisk broms?
              </Text>
              <Text style={[styles.greyText, styles.bullet]}>
                {`\u2022 `}Ge exempel på en attraktion där mekaniska bromsar används. Vad
                händer om det blir strömavbrott? Gå till teknikbordet och
                undersök.
              </Text>
              <Text style={[styles.greyText, styles.bullet]}>
                {`\u2022 `}Kan du lyfta en Jetline-motor med en hävstång? Gå till
                teknikbordet och försök!
              </Text>
            </View>
          </SwipeContainer>

          <KeyboardAvoidingView style={containerStyles.swipeContainer} behavior="padding" keyboardVerticalOffset={50}>
          <StatusBar translucent={false} barStyle="light-content" />
          <View style={[{flex:0.2, justifyContent: 'center', alignItems:'center'}]}>
              <Text style={styles.headerText}>Jetline</Text>
              <Text style={styles.subHeaderText}>Mät och räkna</Text>
            </View>
            <View style={[{flex:0.4}, styles.textWrapper]}>
              <Text style={[styles.greyText, styles.bullet]}>
                Välj en stolpe. Hur lång tid tar det för tåget att passera stolpen? Tåget är 9,2 m långt.
              </Text>
              <Text style={[styles.greyText, styles.bullet]}>
                Hur fort går tåget förbi stolpen?
              </Text>
            </View>
            <View style={[{
              flex: 0.4, 
              flexDirection: 'row', 
              alignItems:'center'}, 
              styles.textWrapper
              ]}>
              <Text style={styles.greyText}>Svar: </Text>
              <TextInput
                  keyboardType={'numeric'} 
                  returnKeyType="done"
                  style={{height: 40, width:70, borderRadius: 5, backgroundColor:'white', textAlign:'center', margin: 5}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
                <Text style={styles.greyText}> m/s</Text>
              </View>
          </KeyboardAvoidingView>
    

          <SwipeContainer>
            <Text style={styles.headerText}>3</Text> 
          </SwipeContainer>

        </ScrollView>
      </SwipeContainer>
    );
  }
}

const styles = EStyleSheet.create({
  headerText: {
    color: "$textGrey",
    fontSize: 50,
    fontWeight: "600",
  },
  subHeaderText: {
    color: "$textGrey",
    fontSize: 20,
    fontWeight: "800",
  },
  greyText: {
    color: "$textGrey",
    fontSize: 20,
    fontWeight: "400",
  },
  textWrapper:{
    justifyContent:'center',
    paddingHorizontal:35,
    alignSelf: 'stretch',
  },
  bullet:{
    paddingVertical: 15,
  }
});

export default JetlineHog1;
