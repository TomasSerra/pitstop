import { View, StyleSheet } from "react-native";
import React, { FC } from "react";
import { ThemedText } from "@/components/ThemedText";

interface DataItemProps {
  type: string;
  value: string;
}

const DataItem: FC<DataItemProps> = ({ type, value }) => {
  return (
    <View style={styles.container}>
      <ThemedText type="defaultSemiBold">{type}:</ThemedText>
      <ThemedText>{value}</ThemedText>
    </View>
  );
};

export default DataItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
});
