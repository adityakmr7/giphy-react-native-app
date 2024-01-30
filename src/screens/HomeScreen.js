import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AppLoader } from "../components";
import SearchInputContainer from "../containers/SearchInputContainer";
import { useNavigation } from "@react-navigation/native";

const { width: wWidth } = Dimensions.get("window");
const IMAGE_WIDTH = wWidth * 0.5 - 20;

const RenderItemView = ({ item }) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate("Detail", {
      id: item?.id,
    });
  };
  return (
    <TouchableOpacity onPress={handleNavigation}>
      <View>
        <Image
          style={{ width: IMAGE_WIDTH, height: IMAGE_WIDTH }}
          source={{
            uri: item?.images?.original?.url,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const renderItem = ({ item, index }) => {
  return <RenderItemView item={item} key={index} />;
};

const HomeScreen = ({ data = [], trendingState = {}, handleOnEndReached }) => {
  if (trendingState.loading) return <AppLoader />;

  if (trendingState.error) return <Text>{trendingState.error}</Text>;
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <SearchInputContainer />
      </View>
      <FlatList
        stickyHeaderHiddenOnScroll={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id?.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        onEndReached={handleOnEndReached}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    width: "50%",
  },
  columnWrapper: {
    marginBottom: 8,
  },
});
export default HomeScreen;
