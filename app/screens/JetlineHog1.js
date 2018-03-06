import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  StatusBar,
  ScrollView,
  Text,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { SwipeContainer } from "../components/Container";
import containerStyles from "../components/Container/styles";

const deviceWidth = Dimensions.get("window").width;

class JetlineHog1 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", modalVisible: false, myPopUpVisible: false };
  }

  test = () => {
    console.warn("test1");
  };

  // toggle = () => {
  //   this.setMyPopUpVisible(!this.state.myPopUpVisible);
  // };

  test2 = text => {
    // this.setState({ text });
    // console.warn(this.state.text);
    if (this.state.text == 5)
      this.setMyPopUpVisible(!this.state.myPopUpVisible);
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setMyPopUpVisible(visible) {
    this.setState({ myPopUpVisible: visible });
    // console.warn('visible');
    // console.warn(this.state.myPopUpVisible);
  }

  render() {
    return (
      <SwipeContainer>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <SwipeContainer>
            <View
              style={[
                { flex: 0.2, justifyContent: "center", alignItems: "center" }
              ]}
            >
              <Text style={styles.headerText}>Jetline</Text>
              <Text style={styles.subHeaderText}>
                Åk, känn efter och undersök
              </Text>
            </View>
            <View style={[{ flex: 0.8 }, styles.textWrapper]}>
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
                {`\u2022 `}Ge exempel på en attraktion där mekaniska bromsar
                används. Vad händer om det blir strömavbrott? Gå till
                teknikbordet och undersök.
              </Text>
              <Text style={[styles.greyText, styles.bullet]}>
                {`\u2022 `}Kan du lyfta en Jetline-motor med en hävstång? Gå
                till teknikbordet och försök!
              </Text>
            </View>
          </SwipeContainer>

          <KeyboardAvoidingView
            style={containerStyles.swipeContainer}
            behavior="padding"
            keyboardVerticalOffset={50}
          >
            <StatusBar translucent={false} barStyle="light-content" />
            <View
              style={[
                { flex: 0.2, justifyContent: "center", alignItems: "center" }
              ]}
            >
              <Text style={styles.headerText}>Jetline</Text>
              <Text style={styles.subHeaderText}>Mät och räkna</Text>
            </View>
            <View style={[{ flex: 0.4 }, styles.textWrapper]}>
              <Text style={[styles.greyText, styles.bullet]}>
                Välj en stolpe. Hur lång tid tar det för tåget att passera
                stolpen? Tåget är 9,2 m långt.
              </Text>
              <Text style={[styles.greyText, styles.bullet]}>
                Hur fort går tåget förbi stolpen?
              </Text>
            </View>
            <View
              style={{
                flex: 0.3,
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center"
                  },
                  styles.textWrapper
                ]}
              >
                <Text style={styles.greyText}>Svar: </Text>
                <TextInput
                  keyboardType={"numeric"}
                  returnKeyType="done"
                  style={{
                    height: 40,
                    width: 70,
                    borderRadius: 5,
                    backgroundColor: "white",
                    textAlign: "center",
                    margin: 5
                  }}
                  onChangeText={(text) => {this.setState({ text }); this.setState({ myPopUpVisible: false });}}
                  // onClick=     {(event) => { func1(); func2();}}
                  value={this.state.text}
                  onSubmitEditing={(event, text) => {
                    this.test2(text);
                  }}
                />
                <Text style={styles.greyText}> m/s</Text>

                {/* // <View
                //   style={{
                //     width: 100,
                //     height: 100,
                //     position: "absolute",
                //     backgroundColor: "white",
                //     alignItems: "center",
                //     justifyContent: "center"
                //   }}
                // >
                //   <TouchableOpacity
                //     style={{ flex: 1 }}
                //     onPress={() => {
                //       this.setMyPopUpVisible(!this.state.myPopUpVisible);
                //     }}
                //   >
                //     <Text>Rätt svar!</Text>
                //   </TouchableOpacity>
                // </View>
              )} */}
              </View>

              {this.state.myPopUpVisible && (
                <View
                  style={[
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: 15,
                    },
                    styles.textWrapper
                  ]}
                >
                  <Image style={{height:20, width:20, marginRight:10,}}
                    // style={styles.logo}
                    source={require("../assets/icons/check.png")}
                    // source={require('../../images/test.png')}
                  />
                  <Text style={styles.greyText}>Rätt svar!</Text>
                </View>
              )}


            </View>
          </KeyboardAvoidingView>

          {/* this.setMyPopUpVisible(!this.state.myPopUpVisible)
          onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}> */}
          <SwipeContainer>
            <Text style={styles.headerText}>3</Text>

            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                alert("Modal has been closed.");
              }}
            >
              <TouchableOpacity
                style={{
                  marginTop: 22,
                  width: 200,
                  height: 200,
                  backgroundColor: "white",
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <View>
                  <Text style={styles.subHeaderText}>Rätt svar!</Text>
                </View>
              </TouchableOpacity>
            </Modal>

            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              <Text>Show Modal</Text>
            </TouchableOpacity>
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
    fontWeight: "600"
  },
  subHeaderText: {
    color: "$textGrey",
    fontSize: 20,
    fontWeight: "800"
  },
  greyText: {
    color: "$textGrey",
    fontSize: 20,
    fontWeight: "400"
  },
  textWrapper: {
    justifyContent: "center",
    paddingHorizontal: 35,
    alignSelf: "stretch"
  },
  bullet: {
    paddingVertical: 15
  }
});

export default JetlineHog1;
