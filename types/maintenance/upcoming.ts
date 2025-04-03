interface LastChange {
  date: string;
  km: number;
}

interface Remaining {
  days?: number;
  km?: number;
}

export interface UpcomingMaintenanceCardData {
  title: string;
  lastChange: LastChange;
  remaining: Remaining;
}
