import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { Row } from "react-native-table-component";
import { useTheme } from "@/hooks/useTheme";
import { Values } from "@/constants/Values";

interface ContentProps {
  rows: string[][];
  columnWidths: number[];
  rowStyle?: object;
}

const Content: FC<ContentProps> = ({ rows, columnWidths, rowStyle }) => {
  const theme = useTheme();
  return (
    <View>
      {rows.map((row, index) => (
        <Row
          key={index}
          data={row}
          style={StyleSheet.flatten([
            rowStyle,
            {
              backgroundColor:
                index % 2 === 0
                  ? theme.table.backgroundColorA
                  : theme.table.backgroundColorB,
            },
          ])}
          textStyle={{
            color: theme.text.default,
            fontSize: Values.font.size.text,
            width: "80%",
          }}
          widthArr={columnWidths}
        />
      ))}
    </View>
  );
};

export default Content;
