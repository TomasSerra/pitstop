export type Collection = {
  id: number;
  name: string;
  data: CollectionData[];
};

export type CollectionData = {
  title: string;
  data: CollectionSectionData[];
};

export type CollectionSectionData = {
  key: string;
  value: string;
};
