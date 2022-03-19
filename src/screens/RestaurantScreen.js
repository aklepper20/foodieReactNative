import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import useRestaurant from "../hooks/useRestaurant";
import yelp from "../api/yelp";

const RestaurantScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = Math.round((dimensions.width * 9) / 16);

  const searchRestaurant = async () => {
    setResult({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const res = await yelp.get(`/${id}`);
      setResult({
        data: res.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResult({
        data: null,
        loading: false,
        error: "Something went wrong...",
      });
    }
  };
  useEffect(() => {
    searchRestaurant();
  }, []);

  if (result.loading) return <Text>Loading...</Text>;
  if (result.error) return <Text>Error</Text>;

  return (
    <View>
      {result.data && (
        <FlatList
          data={result.data.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            console.log({ item });
            return (
              <Image
                style={{ height: imageHeight, width: imageWidth }}
                source={{ uri: item }}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
