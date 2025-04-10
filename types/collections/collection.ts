export interface Collection {
  id: number;
  name: string;
  data: CollectionData[];
}

export interface CollectionData {
  title: string;
  data: CollectionSectionData[];
}

export interface CollectionSectionData {
  key: string;
  value: string;
}
