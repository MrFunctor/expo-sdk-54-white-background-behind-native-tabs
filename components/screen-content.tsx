import { StyleSheet } from "react-native";
import { PropsWithChildren } from "react";

import { ThemedView } from "./themed-view";

export function ScreenContent({ children }: PropsWithChildren) {
  return <ThemedView style={styles.container}>{children}</ThemedView>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    gap: 20,
    justifyContent: "center",
    padding: 20,
  },
});
