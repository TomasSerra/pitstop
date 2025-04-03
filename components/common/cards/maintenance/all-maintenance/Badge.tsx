import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { useTheme } from "@/hooks/useTheme";

interface BadgeProps {
  km?: number;
  days?: string;
}

const Badge: React.FC<BadgeProps> = ({ km, days }) => {
  const theme = useTheme();
  return (
    <View
      style={[styles.badgeContainer, { backgroundColor: theme.background }]}
    >
      {(km || days) && <ThemedText type="small">Every </ThemedText>}
      <ThemedText type="small">{km} km</ThemedText>
      {km && days && <ThemedText type="small"> or </ThemedText>}
      <ThemedText type="small">{days} days</ThemedText>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 1000,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
