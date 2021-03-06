import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "./common/styles";

const Search = ({ setSelectCategory }) => {
  const [input, setInput] = useState("");

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        onChangeText={(text) => {
          setInput(text);
        }}
        onEndEditing={() => {
          if (input) setSelectCategory(input);
          setInput("");
        }}
        value={input}
        style={styles.input}
        placeholder="Restaurants, food..."
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});
