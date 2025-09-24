import { Link } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { ScreenContent } from "@/components/screen-content";

export default function HomeScreen() {
  return (
    <ScreenContent>
      <ThemedText type="title">Home</ThemedText>

      <Link href="/screen-2">
        <ThemedText type="link">Go to screen 2</ThemedText>
      </Link>
    </ScreenContent>
  );
}
