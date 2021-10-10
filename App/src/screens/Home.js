import React, { useState } from "react";
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
import { Entypo } from "@expo/vector-icons";
import { format } from "date-fns";

import colors from "../constants/colors";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import { ConversionInput } from "../components/ConversionInput";
import { TouchableOpacity } from "react-native-gesture-handler";

const screen = Dimensions.get("window");

const Home = ({ navigation }) => {
  const baseCurrency = "USD";
  const quoteCurrency = "BGP";
  const conversionRate = 0.7346;
  const date = new Date();

  const [scrollable, setScrollable] = useState(false);

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
            text="USD"
            value="123"
            onSubmit={() => alert("Todo!")}
            onChangeText={(text) => console.log("text", text)}
            keyboardType="numeric"
          />
          <ConversionInput
            text="GBP"
            value="123"
            onSubmit={() => alert("Todo!")}
            keyboardType="numeric"
            editable={false}
          />
          <Text
            style={styles.text}
          >{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
            date,
            "MMMM do, yyyy"
          )}`}</Text>

          <Button text="Reverse Currencies" onPress={() => alert("TODO!")} />
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
