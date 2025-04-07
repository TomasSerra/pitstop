import { View, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/common/button/Button";
import ButtonsSlider from "@/components/common/buttons-slider/ButtonsSlider";
import { Collection } from "@/types/collections/collection";
import Table from "@/components/common/table/Table";
import { ScrollView } from "react-native-gesture-handler";

const CollectionsPage = () => {
  const [activeCollection, setActiveCollection] = React.useState(0);
  const collections: Collection[] = [
    {
      id: 1,
      name: "Liquids",
      description: "Table of car liquids",
      headers: ["Type", "Detail", "Best Brands", "Price"],
      rows: [
        ["Oil", "10w40 Semisintetico", "Castrol, Mobil", "$50"],
        ["Break Fluid", "DOT 4", "Castrol, Mobil", "$20"],
        ["Coolant", "G12", "Castrol, Mobil", "$30"],
        ["Power Steering Fluid", "ATF", "Castrol, Mobil", "$25"],
      ],
    },
    {
      id: 2,
      name: "Filters",
      description: "Table of car filters",
      headers: ["Type", "Best Brands", "Price"],
      rows: [
        ["Oil Filter", "Mann", "$10"],
        ["Air Filter", "Mann", "$15"],
        ["Fuel Filter", "Mann", "$20"],
        ["Cabin Filter", "Mann", "$25"],
      ],
    },
    {
      id: 3,
      name: "Tires",
      description: "Table of car tires",
      headers: ["Type", "Best Brands", "Price"],
      rows: [
        ["Summer Tire", "Michelin Pilot Sport 4", "$200"],
        ["Winter Tire", "Michelin Pilot Alpin 5", "$250"],
        ["All Season Tire", "Michelin CrossClimate+", "$220"],
        ["Off Road Tire", "Michelin LTX Force", "$300"],
      ],
    },
    {
      id: 4,
      name: "Brakes",
      description: "Table of car brakes",
      headers: ["Type", "Best Brands", "Price"],
      rows: [
        ["Disc Brake", "Brembo", "$100"],
        ["Drum Brake", "Brembo", "$80"],
        ["Ceramic Brake Pads", "Brembo", "$120"],
        ["Semi-Metallic Brake Pads", "Brembo", "$90"],
      ],
    },
    {
      id: 5,
      name: "Batteries",
      description: "Table of car batteries",
      headers: ["Type", "Best Brands", "Price"],
      rows: [
        ["Lead Acid Battery", "Bosch", "$150"],
        ["Lithium Ion Battery", "Bosch", "$200"],
        ["AGM Battery", "Bosch", "$250"],
        ["Gel Battery", "Bosch", "$300"],
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
        />
        <Button text="+ Add" variant="outlined" />
      </View>
      <View style={styles.tableContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
        >
          <Table
            headers={collections[activeCollection].headers}
            rows={collections[activeCollection].rows}
          />
        </ScrollView>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonsContainer: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  tableContainer: {
    marginHorizontal: -20,
  },
});
