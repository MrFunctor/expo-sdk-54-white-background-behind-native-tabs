import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Settings" }} />
      <Stack.Screen
        name="screen-2"
        options={{ headerTitle: "Settings Screen 2" }}
      />
    </Stack>
  );
}
