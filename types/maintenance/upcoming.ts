type LastChange = {
  date: string;
  km: number;
};

type Remaining = {
  days?: number;
  km?: number;
};

export type UpcomingMaintenanceCardData = {
  title: string;
  lastChange: LastChange;
  remaining: Remaining;
};
