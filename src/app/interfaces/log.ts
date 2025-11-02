export interface Log {
  userId: string;
  projectId: string;
  projectName: string;
  title: string;
  description: string;
  date: Date;
  hours: number;
  billable: boolean;
}
