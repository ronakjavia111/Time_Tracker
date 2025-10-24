import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TimeLogService } from '../../services/time-log-service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-daily-log',
  imports: [MatTableModule, MatPaginatorModule, MatOption, MatSelect, FormsModule, MatIconModule],
  templateUrl: './daily-log.html',
  styleUrl: './daily-log.css',
})
export class DailyLog implements OnInit {
  logTimeForm: FormGroup;
  projects: any[] = [];

  constructor(private timeLog: TimeLogService, private fb: FormBuilder) {
    this.logTimeForm = this.fb.group({
      logs: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.timeLog.fetchAllProjects().subscribe((records: Project[]) => {
      this.projects = records;
    });
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

    this.projects = [...this.projects, row];
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
    this.projects.splice(index, 1);
    this.projects = [...this.projects];
  }

  resetTable() {
    this.projects = [];
  }

  submitTable() {
    console.log('Submitted Data:', this.projects);
  }
}
