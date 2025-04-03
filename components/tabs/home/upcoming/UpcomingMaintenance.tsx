import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import UpcomingMaintenanceCard from "@/components/common/cards/maintenance/upcoming-maintenance/UpcomingMaintenanceCard";
import { UpcomingMaintenanceCardData } from "@/types/maintenance/upcoming";

const UpcomingMaintenance = () => {
  const cardData: UpcomingMaintenanceCardData[] = [
    {
      title: "Oil Change",
      lastChange: { date: "Dec 1, 2024", km: 60000 },
      remaining: { days: 63, km: 0 },
    },
    {
      title: "Oil Change",
      lastChange: { date: "Dec 13, 2023", km: 60000 },
      remaining: { days: undefined, km: 100 },
    },
    {
      title: "Oil Change",
      lastChange: { date: "Dec 1, 2024", km: 60000 },
      remaining: { days: 34, km: 1500 },
    },
  ];

  const orderByPriority = (
    a: UpcomingMaintenanceCardData,
    b: UpcomingMaintenanceCardData
  ): number => {
    const overdueKmA = (a.remaining.km ?? 0) < 0;
    const overdueKmB = (b.remaining.km ?? 0) < 0;
    const overdueDaysA = (a.remaining.days ?? 0) < 0;
    const overdueDaysB = (b.remaining.days ?? 0) < 0;

    if (overdueKmA !== overdueKmB) return overdueKmA ? -1 : 1;

    if (overdueDaysA !== overdueDaysB) return overdueDaysA ? -1 : 1;

    if (a.remaining.km !== b.remaining.km)
      return (a.remaining.km ?? 0) - (b.remaining.km ?? 0);

    return (a.remaining.days ?? 0) - (b.remaining.days ?? 0);
  };

  useEffect(() => {
    cardData.sort(orderByPriority);
  }, [cardData]);

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">Upcoming Maintenance</ThemedText>
      <View style={styles.cardContainer}>
        {cardData.map((item, index) => (
          <UpcomingMaintenanceCard key={index} data={item} />
        ))}
      </View>
    </View>
  );
};

export default UpcomingMaintenance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 17,
  },
  cardContainer: {
    gap: 7,
  },
});
