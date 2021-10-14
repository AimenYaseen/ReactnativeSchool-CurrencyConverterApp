import React from "react";
import {
  ScrollView,
  StyleSheet,
  Linking,
  Alert,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import { RowItem, RowSeparator } from "../components/RowItem";
import colors from "../constants/colors";

const openLink = (url) => {
  return Linking.openURL(url).catch((err) =>
    Alert.alert("Something went wrong. Please try again later!")
  );
};

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <RowItem
          text="Themes"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.icon} />
          }
          onSubmit={() => alert("Todo!")}
        />
        <RowSeparator />
        <RowItem
          text="React Native Basics"
          rightIcon={<Entypo name="export" size={20} color={colors.icon} />}
          onSubmit={() =>
            openLink(
              "https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter"
            )
          }
        />
        <RowSeparator />
        <RowItem
          text="React Native By Examples"
          rightIcon={<Entypo name="export" size={20} color={colors.icon} />}
          onSubmit={() => openLink("https://reactnativebyexample.com")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
