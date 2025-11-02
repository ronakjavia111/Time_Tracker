import { Component, Inject, OnInit } from '@angular/core';
import {
  MatHeaderRowDef,
  MatRowDef,
  MatCellDef,
  MatHeaderCellDef,
  MatTableModule,
} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TimeLogService } from '../../services/time-log-service';
import { AuthService } from '../../services/auth-service';
import { Project } from '../../interfaces/project';
import { Logs } from '../../services/logs';

@Component({
  selector: 'app-weekly-log',
  imports: [
    MatHeaderRowDef,
    MatRowDef,
    MatCellDef,
    MatHeaderCellDef,
    MatSelectModule,
    MatTableModule,
    CommonModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './weekly-log.html',
  styleUrl: './weekly-log.css',
})
export class WeeklyLog implements OnInit {
  rows: any[] = [];
  weeklyLists: any[] = [];
  projectLists: any[] = [];
  weekStart!: Date;
  weekEnd!: Date;
  billableStatus = [
    { key: true, value: 'YES' },
    { key: false, value: 'NO' },
  ];

  constructor(
    private auth: AuthService,
    private dialogRef: MatDialogRef<WeeklyLog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private timeLog: TimeLogService,
    private logService: Logs
  ) {}
  ngOnInit(): void {
    this.setWeek(new Date());

    this.timeLog.fetchAllProjects().subscribe((projects: Project[]) => {
      this.projectLists = projects;
    });

    this.addRow();
  }

  weekDays = [
    { key: 'mon', label: 'Mon' },
    { key: 'tue', label: 'Tue' },
    { key: 'wed', label: 'Wed' },
    { key: 'thu', label: 'Thu' },
    { key: 'fri', label: 'Fri' },
  ];

  displayedColumns = [
    'title',
    'projectName',
    'description',
    'billable',
    ...this.weekDays.map((d) => d.key),
    'total',
    'actions',
  ];

  addRow() {
    const newRow: any = {
      title: '',
      projectName: null,
      description: '',
      billable: '',
      hours: { mon: '', tue: '', wed: '', thu: '', fri: '' },
      errors: {},
    };

    this.rows = [...this.rows, newRow];
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
    this.rows = [...this.rows];
  }

  // Set the week's start (Monday) and end (Friday)
  setWeek(date: Date) {
    const day = date.getDay(); // Sun = 0, Mon = 1, and so on
    const diffToMonday = day === 0 ? -6 : 1 - day; // if Sunday, go back 6 days

    this.weekStart = new Date(date);
    this.weekStart.setDate(date.getDate() + diffToMonday);
    this.weekEnd = new Date(this.weekStart);
    this.weekEnd.setDate(this.weekStart.getDate() + 4); // Mon–Fri
  }

  // Go to previous week
  previousWeek() {
    const prevWeek = new Date(this.weekStart);
    prevWeek.setDate(this.weekStart.getDate() - 7);
    this.setWeek(prevWeek);
  }

  // Go to next week
  nextWeek() {
    const nextWeek = new Date(this.weekStart);
    nextWeek.setDate(this.weekStart.getDate() + 7);
    this.setWeek(nextWeek);
  }

  getCurrentWeekDates(): { key: string; date: string }[] {
    const monday = this.weekStart;

    const week: { key: string; date: string }[] = [];
    const formatter = new Intl.DateTimeFormat('en-IN', { weekday: 'short' });

    for (let i = 0; i < 5; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);

      const standardDate = date.toDateString();

      week.push({
        key: formatter.format(date).toLowerCase(),
        date: standardDate,
      });
    }

    return week;
  }

  // Format week display, e.g., "MM dd – MM dd, yyyy"
  getWeekRangeDisplay(): string {
    const format: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    const start = this.weekStart.toLocaleDateString('en-IN', format);
    const end = this.weekEnd.toLocaleDateString('en-IN', format);
    const year = this.weekEnd.getFullYear();

    return `${start} - ${end}, ${year}`;
  }

  // Total hours for a single row (weekly)
  getWeeklyTotal(row: any): number {
    let total = 0;

    for (const day of this.weekDays) {
      const h = row.hours[day.key];
      if (h) total += this.timeToDecimal(h);
    }

    return total;
  }

  // Total hours for a single day across all rows
  getDayTotal(dayKey: string): number {
    return this.rows.reduce((sum, row) => {
      const h = row.hours[dayKey];
      return sum + (h ? this.timeToDecimal(h) : 0);
    }, 0);
  }

  // Convert HH:mm string to decimal hours
  timeToDecimal(time: string): number {
    if (!time) return 0;
    const [h, m] = time.split(':').map(Number);
    return h + m / 60;
  }

  // ResetTable
  resetTable() {
    this.rows = [];
    this.addRow();
  }

  submitTable() {
    if (!this.validateRows()) {
      return;
    }

    this.rows.forEach((record) => {
      for (const [key, val] of Object.entries(record.hours)) {
        if (val) {
          const payload = {
            userId: this.auth.getUserId(),
            projectId: record.projectName,
            title: record.title,
            description: record.description || '',
            date: this.getCurrentWeekDates().find((x) => x.key === key)?.date,
            hours: val,
            billable: String(record.billable).toUpperCase() === 'YES',
          };

          this.logService.addLog(payload);
          this.dialogRef?.close(payload);
        }
      }
    });
  }

  validateRows(): boolean {
    let isValid = true;
    let anyHr = false;

    this.rows.forEach((row: any) => {
      row.errors = { hours: {} };

      if (!row.title || row.title.trim() === '') {
        row.errors.title = 'Title is required';
        isValid = false;
      }

      if (!row.projectName) {
        row.errors.projectName = 'Project is required';
        isValid = false;
      }

      for (const [key, val] of Object.entries(row.hours)) {
        if (val && val !== '') {
          anyHr = true;

          if (val <= '00:00') {
            row.errors.hours[key] = 'Enter valid hours';
            isValid = false;
          }
        }
      }

      if (!anyHr) {
        row.errors.hours['mon'] = 'Hours is required';
        isValid = false;
      }

      if (!row.billable) {
        row.errors.billable = 'Billable is required';
        isValid = false;
      }
    });

    return isValid;
  }

  onClose() {
    this.dialogRef.close();
  }
}
