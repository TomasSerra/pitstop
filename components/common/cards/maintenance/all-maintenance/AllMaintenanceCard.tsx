import { StyleSheet, View } from "react-native";
import React from "react";
import { AllMaintenanceCardData } from "@/types/maintenance/all";
import { ThemedText } from "@/components/ThemedText";
import Badge from "./Badge";
import { useTheme } from "@/hooks/useTheme";

interface AllMaintenanceCardProps {
  data: AllMaintenanceCardData;
}

const AllMaintenanceCard: React.FC<AllMaintenanceCardProps> = ({ data }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor: theme.card.border,
          backgroundColor: theme.card.background,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <ThemedText type="defaultSemiBold">{data.title}</ThemedText>
        <Badge km={data.frequency.km} days={data.frequency.days} />
      </View>
      <ThemedText type="small" style={styles.last}>
        Last: {data.lastChange.km} km ({data.lastChange.date})
      </ThemedText>
      <ThemedText type="smallSemiBold">
        Next: {data.next.km} km ({data.next.date})
      </ThemedText>
    </View>
  );
};

export default AllMaintenanceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
    gap: 3,
    borderBottomWidth: 1,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
  },
  last: {
    opacity: 0.7,
  },
});
