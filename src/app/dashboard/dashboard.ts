import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogTime } from '../pages/log-time/log-time';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private auth: AuthService, private dialog: MatDialog) {}

  logout() {
    this.auth.logout();
  }

  openLogTime() {
    this.dialog.open(LogTime, {
      panelClass: 'blur-dialog-container',
      backdropClass: 'blurred-backdrop',
    });
  }
}
