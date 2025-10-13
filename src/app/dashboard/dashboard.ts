import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
