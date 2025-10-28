import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { TimeLogService } from '../../services/time-log-service';
import { Project } from '../../interfaces/project';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-log-time',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  templateUrl: './log-time.html',
  styleUrl: './log-time.css',
})
export class LogTime implements OnInit {
  logTimeForm: FormGroup;
  projects: Project[] = [];
  selectedProject: string = '';

  constructor(
    private timeLog: TimeLogService,
    private auth: AuthService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LogTime>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.logTimeForm = this.fb.group({
      title: ['', Validators.required],
      projectName: ['', Validators.required],
      date: ['', Validators.required],
      description: [''],
      hours: ['', Validators.required],
      billable: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.timeLog.fetchAllProjects().subscribe((records: Project[]) => {
      this.projects = records;
    });
  }

  onSubmit() {
    if (this.logTimeForm.valid) {
      const form = this.logTimeForm.value;
      const payload = {
        userId: this.auth.getUserId(),
        projectId: form.projectName,
        title: form.title,
        description: form.description || '',
        date: form.date
          ? new Date(form.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })
          : null,
        hours: form.hours,
        billable: String(form.billable).toUpperCase() === 'YES',
      };

      this.timeLog.addLogTime(payload).subscribe({
        next: () => {
          this.dialogRef?.close(payload);
        },
        error: () => {
          alert(`Failed to add daily log: ${payload.title}`);
        },
      });
    } else {
      this.logTimeForm.markAllAsTouched();
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
