import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useTheme } from "@/hooks/useTheme";
import { IconSymbol } from "@/components/ui/icons/IconSymbol";

export default function Header({ car }: { car: string }) {
  const themeColor = useTheme();

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: themeColor.header,
          borderBottomColor: themeColor.card.border,
          borderBottomWidth: 1,
        },
      ]}
    >
      <ThemedText type="subtitle" style={{ color: themeColor.primary }}>
        PitStop
      </ThemedText>
      <View style={styles.carContainer}>
        <IconSymbol size={20} name="car.fill" color={themeColor.text.default} />
        <ThemedText>{car}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  carContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});
