import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import yelp from "../api/yelp";
import React, { useEffect } from "react";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";

const Restaurants = ({ selectCategory }) => {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(selectCategory);
  }, [selectCategory]);
  console.log({ data: data, loading, error });

  if (loading)
    return (
      <Text>
        <ActivityIndicator size="large" marginVertical={30} />
      </Text>
    );

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
