import { Link } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { ScreenContent } from "@/components/screen-content";

export default function SettingsScreen() {
  return (
    <ScreenContent>
      <ThemedText type="title">Settings</ThemedText>

      <Link href="/settings/screen-2">
        <ThemedText type="link">Go to screen 2</ThemedText>
      </Link>
    </ScreenContent>
  );
}
