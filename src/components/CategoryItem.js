import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { elevation } from "./common/styles";
const CategoryItem = () => {
  return (
    <View style={[styles.container, styles.elevation]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./assets/images/burger.png")}
        />
      </View>
      <Text style={styles.header}>Burger</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginHorizontal: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginBottom: 5,
  },
  header: {
    fontWeight: "bold",
  },
});
