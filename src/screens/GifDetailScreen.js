import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const { height: wHeight } = Dimensions.get("window");
const GifDetailScreen = ({ data = {}, handleDownload, handleShare }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: data?.images?.original?.url,
        }}
      />
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={handleDownload} style={styles.button}>
          <FontAwesome5 name="download" size={20} color="#555" />
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleShare} style={styles.button}>
          <FontAwesome5 name="share-alt" size={20} color="#555" />
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: wHeight * 0.6,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    marginLeft: 8,
    color: "#555",
  },
});
export default GifDetailScreen;