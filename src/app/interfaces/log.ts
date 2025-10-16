export interface Log {
  userId: number;
  projectId: number;
  projectName: string;
  title: string;
  description: string;
  date: Date;
  hours: number;
  billable: boolean;
}
