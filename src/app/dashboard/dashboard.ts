import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogTime } from '../pages/log-time/log-time';
import { DailyLog } from '../pages/daily-log/daily-log';
import { WeeklyLog } from '../pages/weekly-log/weekly-log';
import { Logs } from '../services/logs';
import { Project } from '../pages/project/project';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private auth: AuthService, private dialog: MatDialog, private logService: Logs) {}

  logout() {
    this.auth.logout();
  }

  openLogTime() {
    const dialog = this.dialog.open(LogTime, {
      panelClass: 'blur-dialog-container',
      backdropClass: 'blurred-backdrop',
      disableClose: true,
    });

    dialog.afterClosed().subscribe((record: any) => {
      if (record) {
        this.logService.addLog(record);
      }
    });
  }

  openDailyLog() {
    this.dialog.open(DailyLog, {
      width: '90vw',
      maxWidth: '1200px',
      height: 'auto',
      panelClass: 'blur-dialog-container',
      backdropClass: 'blurred-backdrop',
      disableClose: true,
    });
  }

  openWeeklyLog() {
    this.dialog.open(WeeklyLog, {
      width: '90vw',
      maxWidth: '1200px',
      height: 'auto',
      panelClass: 'blur-dialog-container',
      backdropClass: 'blurred-backdrop',
      disableClose: true,
    });
  }

  openProject() {
    this.dialog.open(Project, {
      width: '20vw',
      maxWidth: '1200px',
      height: 'auto',
      panelClass: 'blur-dialog-container',
      backdropClass: 'blurred-backdrop',
      disableClose: true,
    });
  }
}
