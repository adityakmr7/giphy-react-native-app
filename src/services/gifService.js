// services/GifService.js
import { Alert, Share } from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

const GifService = {
  downloadAndSave: async (gifUrl) => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status === "granted") {
        const fileName = `downloaded_${Date.now()}.gif`;
        const downloadResult = await FileSystem.downloadAsync(
          gifUrl,
          FileSystem.documentDirectory + fileName
        );

        if (downloadResult.status === 200) {
          await MediaLibrary.saveToLibraryAsync(downloadResult.uri);
          Alert.alert(
            "Download Successful",
            "GIF image has been downloaded and saved to your device."
          );
        } else {
          Alert.alert("Download Failed", "Unable to download the GIF image.");
        }
      } else {
        Alert.alert(
          "Permission Denied",
          "Media library permission is required to download GIF images."
        );
      }
    } catch (error) {
      console.error("Error downloading GIF image:", error);
      Alert.alert(
        "Error",
        "An error occurred while downloading the GIF image."
      );
    }
  },
  shareGif: async (gifUrl) => {
    try {
      const fileName = `shared_${Date.now()}.gif`;
      const downloadResult = await FileSystem.downloadAsync(
        gifUrl,
        FileSystem.cacheDirectory + fileName
      );

      if (downloadResult.status === 200) {
        await Share.share({ url: downloadResult.uri });
      } else {
        Alert.alert("Sharing Failed", "Unable to share the GIF image.");
      }
    } catch (error) {
      console.error("Error sharing GIF image:", error);
      Alert.alert("Error", "An error occurred while sharing the GIF image.");
    }
  },
};

export default GifService;
