import { View, StyleSheet } from "react-native";
import React, { FC } from "react";
import { Values } from "@/constants/Values";
import { useTheme } from "@/hooks/useTheme";

interface CardProps {
  children?: React.ReactNode;
  style?: object;
}

const Card: FC<CardProps> = ({ children, style }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: theme.card.border,
          backgroundColor: theme.card.background,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderRadius: Values.card.borderRadius,
    borderWidth: 1,
    padding: 20,
    overflow: "hidden",
  },
});
