import { DimensionValue, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Values } from "@/constants/Values";

interface ButtonProps extends React.ComponentProps<typeof Pressable> {
  color?: "primary";
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outlined";
  text: string;
}

const getColorMap = (theme: ReturnType<typeof useTheme>) => ({
  primary: {
    filled: {
      backgroundColor: theme.primary,
      textColor: theme.text.onPrimary,
      borderColor: "transparent",
    },
    outlined: {
      backgroundColor: "transparent",
      textColor: theme.primary,
      borderColor: theme.primary,
    },
  },
});

const getSizeMap = (size: ButtonProps["size"]) => {
  const { button } = Values;
  switch (size) {
    case "small":
      return {
        height: button.small.height,
        fontSize: button.small.fontSize,
      };
    case "medium":
      return {
        height: button.medium.height,
        fontSize: button.medium.fontSize,
      };
    case "large":
      return {
        height: button.large.height,
        width: "100%" as DimensionValue,
        fontSize: button.large.fontSize,
      };
    default:
      return {
        height: button.medium.height,
        fontSize: button.medium.fontSize,
      };
  }
};

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  size = "medium",
  variant = "filled",
  text,
  ...props
}) => {
  const theme = useTheme();
  const colorMap = getColorMap(theme);
  const sizeMap = getSizeMap(size);
  const buttonColorStyle = colorMap[color][variant];
  const buttonSizeStyle = sizeMap;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        buttonColorStyle,
        buttonSizeStyle,
        pressed && { opacity: 0.7 },
      ]}
      android_ripple={{ color: theme.primary + "30" }}
      {...props}
    >
      <Text style={{ color: buttonColorStyle.textColor, fontWeight: "bold" }}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: Values.button.paddingVertical,
    paddingHorizontal: Values.button.paddingHorizontal,
    borderRadius: Values.button.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
