import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimeLogService } from './time-log-service';

@Injectable({
  providedIn: 'root',
})
export class Logs {
  private logsSubject = new BehaviorSubject<any[]>([]);
  logs = this.logsSubject.asObservable();

  constructor(private timeLog: TimeLogService) {}

  setInitialLogs(initialLogs: any[]) {
    this.logsSubject.next(initialLogs);
  }

  loadData() {
    this.timeLog.getAllTimeLogs().subscribe((records) => {
      this.logsSubject.next(records);
    });
  }

  addLog(log: any) {
    this.timeLog.addLogTime(log).subscribe((newLog) => {
      console.log("new", newLog.data);
      
      const current = this.logsSubject.getValue();
      console.log("curr", current);
      this.logsSubject.next([...current, newLog.data]);
    });
  }

  removeLog(id: number) {
    this.timeLog.deleteLogTime(id).subscribe(() => {
      const updated = this.logsSubject.getValue().filter((log) => log.id != id);
      this.logsSubject.next(updated);
    });
  }
}
