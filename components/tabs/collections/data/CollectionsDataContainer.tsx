import React, { FC } from "react";
import Card from "@/components/common/cards/card/Card";
import { CollectionData } from "@/types/collections/collection";
import { StyleSheet, View } from "react-native";
import CollectionToggle from "./CollectionToggle";
import Button from "@/components/common/button/Button";

interface CollectionsContainerProps {
  collectionData: CollectionData[];
}

const CollectionsDataContainer: FC<CollectionsContainerProps> = ({
  collectionData,
}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        {collectionData.map((collection) => (
          <CollectionToggle
            key={collection.title}
            title={collection.title}
            collection={collection.data}
          />
        ))}
        <Button
          text="+ Add"
          size="small"
          variant="outlined"
          color="black"
          style={styles.addSectionButton}
          onPress={() => {}}
        />
      </Card>
      <Button
        text="Delete Collection"
        variant="text"
        style={{ width: "auto" }}
        onPress={() => {}}
        leftIcon="trash"
      />
    </View>
  );
};

export default CollectionsDataContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    flex: 1,
    gap: 20,
    paddingBottom: 20,
  },
  addSectionButton: {
    width: "100%",
    marginTop: 20,
  },
});
