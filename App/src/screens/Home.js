import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import { ConversionInput } from "../components/ConversionInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { format } from "date-fns";

import colors from "../constants/colors";
import { ConversionContext } from "../context/ConversionContext";

const screen = Dimensions.get("window");

const Home = ({ navigation }) => {
  const [scrollable, setScrollable] = useState(false);
  const [value, setValue] = useState("100");

  const { baseCurrency, quoteCurrency, swapCurrencies } =
    useContext(ConversionContext);

  const conversionRate = 0.7346;
  const date = new Date();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView
        scrollEnabled={scrollable}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Options")}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image
              source={require("../assests/images/background.png")}
              style={styles.backgroundLogo}
              resizeMode="contain"
            />
            <Image
              source={require("../assests/images/logo.png")}
              style={styles.innerLogo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.headerText}>Currency Converter</Text>
          <ConversionInput
            text={baseCurrency}
            value={value}
            onSubmit={() =>
              navigation.navigate("CurrencyList", {
                title: "Base Currency",
                isBaseCurrency: true,
              })
            }
            onChangeText={(text) => setValue(text)}
            keyboardType="numeric"
          />
          <ConversionInput
            text={quoteCurrency}
            value={
              value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
            }
            onSubmit={() =>
              navigation.navigate("CurrencyList", {
                title: "Quote Currency",
                isBaseCurrency: false,
              })
            }
            keyboardType="numeric"
            editable={false}
          />
          <Text
            style={styles.text}
          >{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
            date,
            "MMMM do, yyyy"
          )}`}</Text>

          <Button text="Reverse Currencies" onPress={() => swapCurrencies()} />
          <KeyboardSpacer
            Toggle={(isKeyboardVisible) => setScrollable(isKeyboardVisible)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  content: {
    paddingTop: screen.height * 0.2,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    //marginBottom: 20,
  },
  backgroundLogo: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  innerLogo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  headerText: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: "center",
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 10,
  },
});

export default Home;
