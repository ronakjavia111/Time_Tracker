import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth-service';
import { TimeLogService } from '../../services/time-log-service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-project',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private timeLog: TimeLogService,
    private toast: NgToastService,
    private dialogRef: MatDialogRef<Project>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    const payload = {
      userId: this.auth.getUserId(),
      name: this.projectForm.value.name,
    };

    this.timeLog.addProject(payload).subscribe({
      next: () => {
        this.dialogRef.close();
        this.toast.success('Project Added Successfully.');
      },
      error: () => {
        this.toast.danger('Failed to Add Project.');
      },
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
