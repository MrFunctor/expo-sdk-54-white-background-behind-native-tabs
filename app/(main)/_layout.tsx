import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
      <Stack.Screen name="screen-2" options={{ headerTitle: "Screen 2" }} />
    </Stack>
  );
}
