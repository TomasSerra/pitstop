import { View, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/common/button/Button";
import ButtonsSlider from "@/components/common/buttons-slider/ButtonsSlider";
import { Collection } from "@/types/collections/collection";
import CollectionsDataContainer from "./data/CollectionsDataContainer";

const CollectionsPage = () => {
  const [activeCollection, setActiveCollection] = React.useState(0);
  const collections: Collection[] = [
    {
      id: 1,
      name: "Liquids",
      data: [
        {
          title: "Oil",
          data: [
            { key: "Type", value: "10w40 Semisintetico" },
            { key: "Brands", value: "Total, Valvoline, Elf, Castrol" },
          ],
        },
        {
          title: "Brakes",
          data: [
            { key: "Type", value: "10w40 Semisintetico" },
            { key: "Brands", value: "Total, Valvoline, Elf, Castrol" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Repuestos",
      data: [
        { title: "Item A", data: [{ key: "A", value: "Value A" }] },
        { title: "Item B", data: [{ key: "B", value: "Value B" }] },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText type="subtitle">Collections</ThemedText>
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonsSlider
          labels={collections.map((collection) => collection.name)}
          selected={activeCollection}
          changeSelected={setActiveCollection}
        >
          <Button text="+" variant="outlined" />
        </ButtonsSlider>
      </View>
      <View style={styles.contentContainer}>
        <CollectionsDataContainer
          collectionData={collections[activeCollection].data}
        />
      </View>
    </View>
  );
};

export default CollectionsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 27,
    paddingBottom: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonsContainer: {
    marginHorizontal: -20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentContainer: {},
});
