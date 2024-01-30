import HomeScreen from "../screens/HomeScreen";
import { useAppContext } from "../AppContext/AppContext";
import React, { useEffect } from "react";

const homeScreenContainer = (WrappedComponent) => (props) => {
  const { state, fetchTrendingGifs } = useAppContext();
  const { trending: trendingState = {} } = state;

  useEffect(() => {
    fetchTrendingGifs();
  }, []);

  const handleOnEndReached = () => {};
  return (
    <WrappedComponent
      data={trendingState?.data}
      trendingState={trendingState}
      handleOnEndReached={handleOnEndReached}
    />
  );
};

export default homeScreenContainer(HomeScreen);
