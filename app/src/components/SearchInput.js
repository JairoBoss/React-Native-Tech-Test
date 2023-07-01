import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Buscar licitaciones"
        placeholderTextColor="grey"
      />
      <Ionicons name="mic" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 4,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "black",
  },
});

export default SearchInput;
