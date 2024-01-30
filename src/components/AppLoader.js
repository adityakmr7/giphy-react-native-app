import { ActivityIndicator, StyleSheet, View } from "react-native";

const AppLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AppLoader;
