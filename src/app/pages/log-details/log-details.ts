import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Calendar } from '../calendar/calendar';

@Component({
  selector: 'app-log-details',
  imports: [MatDialogContent, MatDialogActions, CommonModule],
  templateUrl: './log-details.html',
  styleUrl: './log-details.css',
})
export class LogDetails {
  constructor(
    public dialogRef: MatDialogRef<Calendar>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
