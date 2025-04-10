import { Ionicons } from "@expo/vector-icons";
import { SymbolWeight } from "expo-symbols";
import React from "react";
import { OpaqueColorValue, StyleProp, TextStyle } from "react-native";

const MAPPING = {
  house: "home",
  calendar: "calendar",
  folder: "folder",
  car: "car",
  "car.fill": "car",
  "exclamationmark.triangle": "alert-circle-outline",
  "arrowtriangle.down.fill": "caret-down",
  "arrowtriangle.right.fill": "caret-forward",
  "square.and.pencil": "pencil",
  "trash.fill": "trash",
  trash: "trash-outline",
} as Partial<
  Record<
    import("expo-symbols").SymbolViewProps["name"],
    React.ComponentProps<typeof Ionicons>["name"]
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <Ionicons color={color} size={size} name={MAPPING[name]} style={style} />
  );
}
