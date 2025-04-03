import { View, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { useTheme } from "@/hooks/useTheme";

interface BadgeProps {
  title: string;
  description: string;
  isOverdue?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  title,
  description,
  isOverdue = false,
}) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemedText type="small">{title}</ThemedText>
      <ThemedText
        type="defaultSemiBold"
        style={{ color: isOverdue ? theme.alert : theme.text.default }}
      >
        {isOverdue ? "Overdue" : description}
      </ThemedText>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 7,
    gap: 5,
  },
});
