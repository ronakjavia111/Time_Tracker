import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
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
import { Logs } from '../../services/logs';

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

  @Output() logAdded = new EventEmitter<any>();

  constructor(
    private timeLog: TimeLogService,
    private logService: Logs,
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

  async onSubmit() {
    if (this.logTimeForm.valid) {
      const form = this.logTimeForm.value;
      const payload = {
        userId: this.auth.getUserId(),
        projectId: form.projectName,
        title: form.title,
        description: form.description || '',
        date: form.date ? new Date(form.date).toDateString() : null,
        hours: form.hours,
        billable: String(form.billable).toUpperCase() === 'YES',
      };
 
      const record = await this.logService.addLog(payload);
      this.logAdded.emit(record);
      
      this.dialogRef?.close();
    } else {
      this.logTimeForm.markAllAsTouched();
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
