import React, { useContext } from "react";
import { View, StatusBar, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";
import { ConversionContext } from "../context/ConversionContext";

export default ({ navigation, route = {} }) => {
  const params = route.params || {};

  const { setBaseCurrency, setQuoteCurrency, baseCurrency, quoteCurrency } =
    useContext(ConversionContext);

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView>
        <FlatList
          data={currencies}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            let selected = false;
            if (params.isBaseCurrency && item === baseCurrency) {
              selected = true;
            } else if (!params.isBaseCurrency && item === quoteCurrency) {
              selected = true;
            }
            return (
              <RowItem
                text={item}
                onSubmit={() => {
                  if (params.isBaseCurrency) {
                    setBaseCurrency(item);
                  } else {
                    setQuoteCurrency(item);
                  }
                  navigation.pop();
                }}
                rightIcon={
                  selected ? (
                    <View style={styles.icon}>
                      <Entypo name="check" size={20} color={colors.white} />
                    </View>
                  ) : null
                }
              />
            );
          }}
          ItemSeparatorComponent={() => <RowSeparator />}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
