export interface Log {
  projectId: number;
  userId: number;
  title: string;
  description: string;
  date: Date;
  hours: number;
  billable: boolean;
}
