import { View, StyleSheet } from "react-native";
import React, { FC } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Values } from "@/constants/Values";
import { Table as RnTable } from "react-native-table-component";
import Header from "./Header";
import Content from "./Content";

interface TableProps {
  headers: string[];
  rows: string[][];
}

const Table: FC<TableProps> = ({ rows, headers }) => {
  const theme = useTheme();
  const columnWidths = headers.map(() => Values.table.columnWidth);
  return (
    <View style={[styles.container, { borderColor: theme.card.border }]}>
      <RnTable>
        <Header
          headers={headers}
          columnWidths={columnWidths}
          rowStyle={styles.row}
        />
        <Content
          rows={rows}
          columnWidths={columnWidths}
          rowStyle={styles.row}
        />
      </RnTable>
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: Values.card.borderRadius,
    overflow: "hidden",
    borderWidth: Values.table.borderWidth,
  },
  row: {
    padding: 15,
  },
});
