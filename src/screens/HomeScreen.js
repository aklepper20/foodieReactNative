import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const [selectCategory, setSelectCategory] = useState("Burger");
  const [foodArr] = useState([
    {
      name: "Burger",
      imageUrl: require("../components/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("../components/assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("../components/assets/images/cake.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("../components/assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("../components/assets/images/steak.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("../components/assets/images/pasta.png"),
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <Search setSelectCategory={setSelectCategory} />
      <Categories
        categories={foodArr}
        setSelectCategory={setSelectCategory}
        selectCategory={selectCategory}
      />
      <Restaurants selectCategory={selectCategory} />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(253, 253, 253)",
    flex: 1,
  },
});
