import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../button/Button";
import { StyleSheet, View } from "react-native";
import { Values } from "@/constants/Values";

interface ButtonsSliderProps {
  labels: string[];
  selected: number;
  changeSelected: (id: number) => void;
  children?: React.ReactNode;
}

const ButtonsSlider: React.FC<ButtonsSliderProps> = ({
  labels = [],
  selected = 0,
  changeSelected = () => {},
  children,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={styles.container}
    >
      <View>{children}</View>
      {labels.map((label, index) => (
        <Button
          key={index}
          text={label}
          variant={selected === index ? "filled" : "outlined"}
          color={selected === index ? "primary" : "black"}
          onPress={() => changeSelected(index)}
        />
      ))}
    </ScrollView>
  );
};

export default ButtonsSlider;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingRight: Values.padding.paddingHorizontal,
    paddingLeft: Values.padding.paddingHorizontal - 10,
  },
});
