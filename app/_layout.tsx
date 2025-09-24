import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { NativeTabs, Icon, Label } from "expo-router/unstable-native-tabs";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NativeTabs>
        <NativeTabs.Trigger name="(main)">
          <Label>Home</Label>
          <Icon sf="house.fill" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="settings">
          <Icon sf="gear" />
          <Label>Settings</Label>
        </NativeTabs.Trigger>
      </NativeTabs>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
