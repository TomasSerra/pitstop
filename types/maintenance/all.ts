export interface AllMaintenanceCardData {
  title: string;
  lastChange: LastChange;
  next: Next;
  frequency: Frequency;
}

interface LastChange {
  date: string;
  km: number;
}

interface Next {
  date?: string;
  km?: number;
}

interface Frequency {
  km?: number;
  days?: string;
}
