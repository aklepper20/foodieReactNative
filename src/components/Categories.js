import { StyleSheet, FlatList } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

const Categories = ({ categories, setSelectCategory, selectCategory }) => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category) => category.name}
      data={categories}
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
  );
};

export default Categories;

const styles = StyleSheet.create({});
