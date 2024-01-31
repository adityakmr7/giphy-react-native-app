import ThemeSwitcher from "../components/ThemeSwitcher";
import HomeScreenContainer from "../containers/homeScreenContainer";
import GifDetailScreenContainer from "../containers/gifDetailScreenContainer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppColors, useTheme } from "../ThemeContext/ThemeContext";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const { theme } = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRight: () => {
            return <ThemeSwitcher />;
          },
          headerTintColor:
            theme !== "dark" ? AppColors.dark.primary : AppColors.light.primary,
          headerStyle: {
            backgroundColor:
              theme === "dark"
                ? AppColors.dark.primary
                : AppColors.light.primary,
          },
        }}
      >
        <Stack.Screen name={"Home"} component={HomeScreenContainer} />
        <Stack.Screen name={"Detail"} component={GifDetailScreenContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
