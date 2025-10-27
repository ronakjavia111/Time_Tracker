import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatHeaderRowDef,
  MatRowDef,
  MatCellDef,
  MatHeaderCellDef,
  MatTableModule,
} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TimeLogService } from '../../services/time-log-service';
import { AuthService } from '../../services/auth-service';
import { Project } from '../../interfaces/project';

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

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private dialogRef: MatDialogRef<WeeklyLog>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private timeLog: TimeLogService
  ) {}
  ngOnInit(): void {
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
    { key: 'sat', label: 'Sat' },
    { key: 'sun', label: 'Sun' },
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
      billable: 'YES',
      hours: { mon: '', tue: '', wed: '', thu: '', fri: '', sat: '', sun: '' },
      errors: {},
    };

    this.rows = [...this.rows, newRow];
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
    this.rows = [...this.rows];
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
  submitTable() {}
  onClose() {
    this.dialogRef.close();
  }
}
