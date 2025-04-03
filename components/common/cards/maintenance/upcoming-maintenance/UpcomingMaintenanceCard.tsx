import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Values } from "@/constants/Values";
import { ThemedText } from "@/components/ThemedText";
import Badge from "./Badge";
import { IconSymbol } from "@/components/ui/icons/IconSymbol";
import { UpcomingMaintenanceCardData } from "@/types/maintenance/upcoming";

interface UpcomingMaintenanceCardProps {
  data: UpcomingMaintenanceCardData;
}

const UpcomingMaintenanceCard: React.FC<UpcomingMaintenanceCardProps> = ({
  data,
}) => {
  const theme = useTheme();
  const [isOverdueKm, setIsOverdueKm] = useState(false);
  const [isOverdueDays, setIsOverdueDays] = useState(false);

  useEffect(() => {
    if (data.remaining.km !== undefined && data.remaining.km <= 0) {
      setIsOverdueKm(true);
    }
    if (data.remaining.days !== undefined && data.remaining.days <= 0) {
      setIsOverdueDays(true);
    }
  }, [data.remaining.km, data.remaining.days]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.card.background,
          borderColor:
            isOverdueDays || isOverdueKm ? theme.alert : theme.card.border,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <ThemedText type="defaultSemiBold">{data.title}</ThemedText>
        {(isOverdueDays || isOverdueKm) && (
          <IconSymbol
            size={20}
            name="exclamationmark.triangle"
            color={theme.alert}
          />
        )}
      </View>
      <ThemedText style={styles.lastChange} type="small">
        Last: {data.lastChange.date} at {data.lastChange.km} km
      </ThemedText>
      <View style={styles.badgesContainer}>
        {data.remaining.km !== undefined && (
          <Badge
            title="Km Remaining"
            description={`${data.remaining.km} km`}
            isOverdue={isOverdueKm}
          />
        )}
        {data.remaining.days !== undefined && (
          <Badge
            title="Days Remaining"
            description={`${data.remaining.days} days`}
            isOverdue={isOverdueDays}
          />
        )}
      </View>
    </View>
  );
};

export default UpcomingMaintenanceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderRadius: Values.card.borderRadius,
    borderWidth: 1,
    padding: 20,
    gap: 5,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lastChange: {
    opacity: 0.7,
  },
  badgesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    paddingTop: 10,
  },
});
