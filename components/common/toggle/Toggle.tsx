import { Pressable, StyleSheet, View } from "react-native";
import React, { FC, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/icons/IconSymbol";
import { useTheme } from "@/hooks/useTheme";

interface ToggleProps {
  title: string;
  children: React.ReactNode;
  right?: React.ReactNode;
}

const Toggle: FC<ToggleProps> = ({ title, children, right }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const arrow = () => {
    if (isOpen) {
      return (
        <IconSymbol
          name="arrowtriangle.down.fill"
          size={16}
          color={theme.text.default}
        />
      );
    } else {
      return (
        <IconSymbol
          name="arrowtriangle.right.fill"
          size={16}
          color={theme.text.default}
        />
      );
    }
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        <Pressable onPress={toggle} style={styles.titleContainer}>
          {arrow()}
          <ThemedText type="subtitle">{title}</ThemedText>
        </Pressable>
        {right}
      </View>
      {isOpen && <View>{children}</View>}
    </View>
  );
};

export default Toggle;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
});
