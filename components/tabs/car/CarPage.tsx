import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import Card from "@/components/common/cards/card/Card";
import { CarData, CarOption } from "@/types/car/car";
import RNPickerSelect from "react-native-picker-select";
import { useTheme } from "@/hooks/useTheme";

const yourCars: CarOption[] = [
  { id: 0, name: "Renault Sandero Rs" },
  { id: 1, name: "Volkswagen Golf TSI" },
];

const carData: CarData = {
  id: "1",
  model: "Sandero RS",
  brand: "Renault",
  year: 2017,
  color: "White",
  mileage: 75000,
  identificationName: "Personal Car",
  engine: "2.0L F4R",
  fuelType: "Nafta",
  transmission: "Manual",
  licensePlate: "AB768SK",
  purchaseDate: "2024-03-14",
  image: "https://example.com/car-image.jpg",
};

const CarPage = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(
    yourCars[0].id
  );

  const theme = useTheme();
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 14,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      backgroundColor: theme.input.background,
      borderColor: theme.input.border,
      borderRadius: 8,
      color: "black",
      paddingRight: 30,
      alignSelf: "center",
    },
    inputAndroid: {
      fontSize: 14,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 8,
      color: "black",
      paddingRight: 30,
      alignSelf: "center",
    },
    inputWeb: {
      fontSize: 14,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 8,
      color: "black",
      paddingRight: 30,
      alignSelf: "center",
      height: 40,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText type="subtitle">Car Info</ThemedText>
        <RNPickerSelect
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
          items={yourCars.map((car) => ({
            label: car.name,
            value: car.id,
          }))}
          placeholder={{ label: "Choose your car...", value: null }}
          style={pickerSelectStyles}
          useNativeAndroidPickerStyle={false}
        />
      </View>

      <Card>
        <ThemedText>{carData.identificationName}</ThemedText>
        <ThemedText>Model: {carData.model}</ThemedText>
        <ThemedText>Brand: {carData.brand}</ThemedText>
        <ThemedText>Year: {carData.year}</ThemedText>
        <ThemedText>Color: {carData.color}</ThemedText>
        <ThemedText>Mileage: {carData.mileage} km</ThemedText>
        <ThemedText>Engine: {carData.engine}</ThemedText>
        <ThemedText>Fuel Type: {carData.fuelType}</ThemedText>
        <ThemedText>Transmission: {carData.transmission}</ThemedText>
        <ThemedText>License Plate: {carData.licensePlate}</ThemedText>
        <ThemedText>Purchase Date: {carData.purchaseDate}</ThemedText>
      </Card>
    </View>
  );
};

export default CarPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
