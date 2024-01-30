import GifDetailScreen from "../screens/GifDetailScreen";
import { useRoute } from "@react-navigation/native";
import { useAppContext } from "../AppContext/AppContext";
import gifService from "../services/gifService";

const gifDetailScreenContainer = (WrappedComponent) => (props) => {
  const { params } = useRoute();

  const { getSelectedGifData } = useAppContext();
  const gifData = getSelectedGifData(params?.id);
  const gifUrl = gifData?.images?.original?.url;
  const handleDownload = async () => {
    // Add logic for download action
    await gifService.downloadAndSave(gifUrl);
    console.log("Download button pressed");
  };

  const handleShare = async () => {
    // Add logic for share action
    await gifService.shareGif(gifUrl);
    console.log("Share button pressed");
  };

  return (
    <WrappedComponent
      data={gifData}
      handleDownload={handleDownload}
      handleShare={handleShare}
    />
  );
};

export default gifDetailScreenContainer(GifDetailScreen);
