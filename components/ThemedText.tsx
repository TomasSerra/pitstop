import { Text, type TextProps, StyleSheet } from "react-native";

import { useTheme } from "@/hooks/useTheme";
import { Values } from "@/constants/Values";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "smallSemiBold"
    | "subtitle"
    | "link"
    | "small";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: theme.text.default },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "smallSemiBold" ? styles.smallSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "small" ? styles.small : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: Values.font.size.text,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: Values.font.size.text,
    lineHeight: 24,
    fontWeight: "600",
  },
  smallSemiBold: {
    fontSize: Values.font.size.small,
    lineHeight: 20,
    fontWeight: "600",
  },
  title: {
    fontSize: Values.font.size.title,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: Values.font.size.subtitle,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: Values.font.size.text,
    color: "#0a7ea4",
  },
  small: {
    fontSize: Values.font.size.small,
    lineHeight: 20,
  },
});
