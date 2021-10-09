import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { ConversionInput } from "../components/ConversionInput";

import colors from "../constants/colors";

const screen = Dimensions.get("window");

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: "center",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
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
});

export default Home;
