import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constants/colors";

export const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require("../assests/images/reverse.png")}
        style={styles.buttonIcon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  buttonIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
});
