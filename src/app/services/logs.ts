import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimeLogService } from './time-log-service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class Logs {
  private logsSubject = new BehaviorSubject<any[]>([]);
  logs = this.logsSubject.asObservable();

  constructor(private timeLog: TimeLogService, private toast: NgToastService) {}

  setInitialLogs(initialLogs: any[]) {
    this.logsSubject.next(initialLogs);
  }

  loadData() {
    this.timeLog.fetchAllTimeLogs().subscribe((records) => {
      this.logsSubject.next(records);
    });
  }

  addLog(log: any) {
    this.timeLog.addLogTime(log).subscribe({
      next: (newLog) => {
        const current = this.logsSubject.getValue();
        this.logsSubject.next([...current, newLog.data]);
        this.toast.success('Log Added Successfully.');
      },
      error: () => {
        this.toast.danger('Failed to Add Log');
      },
    });
  }

  deleteLog(id: number) {
    this.timeLog.deleteLogTime(id).subscribe({
      next: () => {
        const updated = this.logsSubject.getValue().filter((log) => log.id != id);
        this.logsSubject.next(updated);
        this.toast.success('Log Deleted Successfully.');
      },
      error: () => {
        this.toast.danger('Failed to Delete Log');
      },
    });
  }
}
