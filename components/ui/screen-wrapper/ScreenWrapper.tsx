import { Values } from "@/constants/Values";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollView
      style={[
        styles.container,
        {
          paddingHorizontal: Values.padding.paddingHorizontal,
          paddingVertical: Values.padding.paddingVertical,
        },
      ]}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
