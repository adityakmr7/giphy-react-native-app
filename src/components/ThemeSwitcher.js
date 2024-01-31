import { TouchableOpacity, View } from "react-native";
import { THEME_MODE, useTheme } from "../ThemeContext/ThemeContext";
import { MaterialIcons as Icon } from "@expo/vector-icons";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const handleThemeChange = () => {
    toggleTheme();
  };
  const ICON_COLOR = theme === THEME_MODE.DARK ? "#fff" : "#000";
  return (
    <TouchableOpacity onPress={handleThemeChange}>
      <View>
        {theme === THEME_MODE.DARK ? (
          <Icon name={"dark-mode"} size={24} color={ICON_COLOR} />
        ) : (
          <Icon name={"light-mode"} size={24} color={ICON_COLOR} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ThemeSwitcher;
