import { Pressable, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import Toggle from "@/components/common/toggle/Toggle";
import DataItem from "./DataItem";
import { CollectionSectionData } from "@/types/collections/collection";
import { IconSymbol } from "@/components/ui/icons/IconSymbol";
import { useTheme } from "@/hooks/useTheme";

interface CollectionToggleProps {
  title: string;
  collection: CollectionSectionData[];
}

const CollectionToggle: FC<CollectionToggleProps> = ({ title, collection }) => {
  return (
    <Toggle title={title} right={editButton()}>
      <View style={styles.contentContainer}>
        {collection.map((item, index) => (
          <DataItem key={index} type={item.key} value={item.value} />
        ))}
      </View>
    </Toggle>
  );
};

const editButton = () => {
  const theme = useTheme();
  return (
    <Pressable
      onPress={() => {}}
      style={({ pressed }) => [pressed && { opacity: 0.7 }]}
      android_ripple={{ color: theme.icon + "30" }}
    >
      <IconSymbol name="square.and.pencil" size={24} color={theme.icon} />
    </Pressable>
  );
};

export default CollectionToggle;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingLeft: 25,
    marginTop: 10,
  },
});
