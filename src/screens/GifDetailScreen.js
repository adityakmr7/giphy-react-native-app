import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "../ThemeContext/ThemeContext";
import { ResizeMode, Video } from "expo-av";

const { height: wHeight } = Dimensions.get("window");
const GifDetailScreen = ({ data = {}, handleDownload, handleShare }) => {
  const { theme } = useTheme();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View
      style={[
        styles.container,
        theme === "dark"
          ? { backgroundColor: "#121212" }
          : { backgroundColor: "#fff" },
      ]}
    >
      <Video
        shouldPlay={true}
        ref={video}
        resizeMode={ResizeMode.CONTAIN}
        style={styles.image}
        videoStyle={styles.image}
        source={{
          uri: data?.images?.original?.mp4,
        }}
        isLooping={true}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />

      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
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
