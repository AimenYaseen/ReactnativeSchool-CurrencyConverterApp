import React from "react";
import { View, StatusBar, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";

export default ({ navigation }) => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView>
        <FlatList
          data={currencies}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return <RowItem text={item} onSubmit={() => navigation.pop()} />;
          }}
          ItemSeparatorComponent={() => <RowSeparator />}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});
