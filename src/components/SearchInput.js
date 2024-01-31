import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons"; // Assuming you have installed the Feather icons package

const SearchInput = ({ onSearch, searchText = "" }) => {
  const handleSearch = (text) => {
    // You can perform any search-related logic here
    // For simplicity, we'll just pass the search text to a callback
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={handleSearch}
      />
      <Feather name="search" size={24} color="black" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    margin: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default SearchInput;
