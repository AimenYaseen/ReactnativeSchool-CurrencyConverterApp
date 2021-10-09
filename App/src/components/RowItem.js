import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";

export const RowItem = ({ text, iconName, onSubmit }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onSubmit}>
      <Text style={styles.text}>{text}</Text>
      <Entypo name={iconName} size={20} color={colors.icon} />
    </TouchableOpacity>
  );
};

export const RowSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
  },
});
