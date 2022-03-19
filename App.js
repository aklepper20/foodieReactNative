import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import Categories from "./src/components/Categories";
import Restaurants from "./src/components/Restaurants";

export default function App() {
  const [selectCategory, setSelectCategory] = useState("Burger");

  const foodArr = [
    {
      name: "Burger",
      imageUrl: require("./src/components/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./src/components/assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("./src/components/assets/images/cake.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("./src/components/assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./src/components/assets/images/steak.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("./src/components/assets/images/pasta.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Search setSelectCategory={setSelectCategory} />
      <Categories
        categories={foodArr}
        setSelectCategory={setSelectCategory}
        selectCategory={selectCategory}
      />
      <Restaurants />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
