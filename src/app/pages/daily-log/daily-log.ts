import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TimeLogService } from '../../services/time-log-service';
import { Project } from '../../interfaces/project';
import { AuthService } from '../../services/auth-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-daily-log',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatOption,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './daily-log.html',
  styleUrl: './daily-log.css',
})
export class DailyLog implements OnInit {
  logTimeForm: FormGroup;
  projectLists: any[] = [];
  rows: any[] = [];

  constructor(
    private timeLog: TimeLogService,
    private fb: FormBuilder,
    private auth: AuthService,
    private dialogRef: MatDialogRef<DailyLog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.logTimeForm = this.fb.group({
      logs: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.timeLog.fetchAllProjects().subscribe((records: Project[]) => {
      this.projectLists = records;
    });

    this.addRow();
  }

  get logs(): FormArray {
    return this.logTimeForm.get('logs') as FormArray;
  }

  addRow() {
    const row = this.fb.group({
      title: ['', Validators.required],
      projectName: ['', Validators.required],
      description: [''],
      hours: ['', Validators.required],
      billable: ['', Validators.required],
    });

    this.rows = [...this.rows, row];
  }

  displayedColumns: string[] = [
    'title',
    'projectName',
    'description',
    'hours',
    'billable',
    'actions',
  ];

  removeRow(index: number) {
    this.rows.splice(index, 1);
    this.rows = [...this.rows];
  }

  resetTable() {
    this.rows = [];
    this.addRow();
  }

  submitTable() {
    if (!this.validateRows()) {
      alert('Please fix errors before saving.');
      return;
    }

    this.rows.forEach((record) => {
      const payload = {
        userId: this.auth.getUserId(),
        projectId: record.projectName,
        title: record.title,
        description: record.description || '',
        date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }),
        hours: record.hours,
        billable: String(record.billable).toUpperCase() === 'YES',
      };

      this.timeLog.addLogTime(payload).subscribe({
        next: () => {
          this.dialogRef?.close(payload);
        },
        error: () => {
          alert(`Failed to add daily log: ${payload.title}`);
        },
      });
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  validateRows(): boolean {
    let isValid = true;

    this.rows.forEach((row: any) => {
      row.errors = {};

      if (!row.title || row.title.trim() === '') {
        row.errors.title = 'Title is required';
        isValid = false;
      }

      if (!row.projectName) {
        row.errors.projectName = 'Project is required';
        isValid = false;
      }

      if (!row.hours) {
        row.errors.hours = 'Hours is required';
        isValid = false;
      }

      if (row.hours <= 0) {
        row.errors.hours = 'Enter valid hours';
        isValid = false;
      }

      if (!row.billable) {
        row.errors.billable = 'Billable is required';
        isValid = false;
      }
    });

    return isValid;
  }
}
