import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { elevation } from "./common/styles";

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={[styles.elevation, styles.container]}>
      <Image source={{ uri: restaurant.image_url }} />
      <View>
        <Text>{restaurant.name}</Text>
        <View>
          <Text>{restaurant.rating}</Text>
          <Text>{restaurant.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: "white",
    height: 100,
    alignSelf: "stretch",
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
