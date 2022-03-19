import { StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";
import React from "react";
import useRestaurants from "../hooks/useRestaurants";

const Restaurants = () => {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    height: 100,
  },
});
