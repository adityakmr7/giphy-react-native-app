import { StyleSheet } from "react-native";
import HomeScreenContainer from "./src/containers/homeScreenContainer";
import { AppContextProvider } from "./src/AppContext/AppContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GifDetailScreenContainer from "./src/containers/gifDetailScreenContainer";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"Home"} component={HomeScreenContainer} />
          <Stack.Screen name={"Detail"} component={GifDetailScreenContainer} />
        </Stack.Navigator>
      </NavigationContainer>
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
