import React from "react";
import {
  ScrollView,
  StyleSheet,
  Linking,
  Alert,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RowItem, RowSeparator } from "../components/RowItem";

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
          iconName="chevron-right"
          onSubmit={() => alert("Todo!")}
        />
        <RowSeparator />
        <RowItem
          text="React Native Basics"
          iconName="export"
          onSubmit={() =>
            openLink(
              "https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter"
            )
          }
        />
        <RowSeparator />
        <RowItem
          text="React Native By Examples"
          iconName="export"
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
