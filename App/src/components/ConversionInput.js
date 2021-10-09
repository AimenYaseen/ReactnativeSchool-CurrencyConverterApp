import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../constants/colors";

export const ConversionInput = ({ text, onSubmit, ...props }) => {
  const containerStyles = [styles.container];

  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    height: 45,
  },
  containerDisabled: {
    backgroundColor: colors.offwhite,
  },
  button: {
    borderRightColor: colors.border,
    borderRightWidth: 1,
    padding: 10,
    backgroundColor: colors.white,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: colors.textLight,
  },
});
