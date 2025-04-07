import React, { FC } from "react";
import { Row, Rows } from "react-native-table-component";
import { useTheme } from "@/hooks/useTheme";
import { Values } from "@/constants/Values";
import { StyleSheet } from "react-native";

interface HeaderProps {
  headers: string[];
  columnWidths: number[];
  rowStyle?: object;
}

const Header: FC<HeaderProps> = ({ headers, columnWidths, rowStyle }) => {
  const theme = useTheme();
  return (
    <Row
      data={headers}
      style={StyleSheet.flatten([
        rowStyle,
        {
          backgroundColor: theme.table.header.backgroundColor,
          borderColor: theme.text.default,
        },
      ])}
      textStyle={{
        color: theme.text.onPrimary,
        fontWeight: "bold",
        fontSize: Values.font.size.text,
        textAlign: "center",
      }}
      widthArr={columnWidths}
    />
  );
};

export default Header;
