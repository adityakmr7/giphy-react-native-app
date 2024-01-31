import { StyleSheet } from "react-native";
import { AppContextProvider } from "./src/AppContext/AppContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppThemeProvider } from "./src/ThemeContext/ThemeContext";
import React from "react";
import Navigation from "./src/Navigation ";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AppThemeProvider>
      <AppContextProvider>
        <Navigation />
      </AppContextProvider>
    </AppThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
