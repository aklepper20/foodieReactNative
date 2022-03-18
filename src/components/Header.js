import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.boldHeader}>delicious Meal!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  constainer: {
    marginTop: 60,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 35,
    marginTop: 60,
    marginHorizontal: 25,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
    marginHorizontal: 25,
  },
});
