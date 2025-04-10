export type AllMaintenanceCardData = {
  title: string;
  lastChange: LastChange;
  next: Next;
  frequency: Frequency;
};

type LastChange = {
  date: string;
  km: number;
};

type Next = {
  date?: string;
  km?: number;
};

type Frequency = {
  km?: number;
  days?: string;
};
