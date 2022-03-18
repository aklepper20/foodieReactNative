import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryItem from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

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
      <Search />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
        data={foodArr}
        renderItem={({ item, index }) => (
          <CategoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
            active={item.name === selectCategory}
            handlePress={() => setSelectCategory(item.name)}
          />
        )}
      />
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
