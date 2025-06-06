import { View, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/common/button/Button";
import AllMaintenanceCard from "@/components/common/cards/maintenance/all-maintenance/AllMaintenanceCard";
import { AllMaintenanceCardData } from "@/types/maintenance/all";
import Card from "@/components/common/cards/card/Card";

const AllMaintenance = () => {
  const data: AllMaintenanceCardData = {
    title: "Oil Change",
    lastChange: {
      date: "Dec 1, 2024",
      km: 12000,
    },
    next: {
      date: "Feb 21, 2025",
      km: 15000,
    },
    frequency: {
      km: 3000,
      days: "365",
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText type="subtitle">All Maintenance</ThemedText>
        <Button text="+ Add" size="small" />
      </View>
      <Card style={StyleSheet.flatten([styles.cardsContainer])}>
        <AllMaintenanceCard data={data} />
        <AllMaintenanceCard data={data} />
        <AllMaintenanceCard data={data} />
        <AllMaintenanceCard data={data} />
      </Card>
    </View>
  );
};

export default AllMaintenance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 17,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardsContainer: {
    gap: 0,
    padding: 0,
  },
});
