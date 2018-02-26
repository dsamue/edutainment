import PropTypes from "prop-types";
import React from "react";
import { Image, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const MenuButton = ({ onPress }) => (
  <TouchableOpacity style={styles.hamburgerIconWrapper} onPress={onPress}>
    <Image
      style={styles.hamburgerIcon}
      source={require("../../icons/hamburger.png")}
    />
  </TouchableOpacity>
);

MenuButton.propTypes = {
  onPress: PropTypes.func
};

export default MenuButton;
