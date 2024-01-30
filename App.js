import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import HomeScreenContainer from "./src/containers/homeScreenContainer";
import { AppContextProvider } from "./src/AppContext/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <HomeScreenContainer />
      </SafeAreaView>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
