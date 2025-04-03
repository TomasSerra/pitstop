import React from "react";
import UpcomingMaintenance from "./upcoming/UpcomingMaintenance";
import { StyleSheet, View } from "react-native";
import AllMaintenance from "./all/AllMaintenance";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <UpcomingMaintenance />
      <AllMaintenance />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 27,
  },
});
