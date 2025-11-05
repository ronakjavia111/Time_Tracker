import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root', // This makes the service available throughout the application
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  private email!: string;
  private userId!: string;

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(payload: any) {
    return this.httpClient.post<{ token: string }>(`${this.baseUrl}/auth/login`, payload);
  }

  register(payload: any) {
    return this.httpClient.post<{ token: string }>(`${this.baseUrl}/auth/register`, payload);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isValid = payload.exp > Math.floor(Date.now() / 1000);

      return isValid ? token : null;
    } catch (error) {
      console.error('Invalid token format:', error);
      return null;
    }
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  private decodeToken(token: string): void {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.userId = payload.id;
        this.email = payload.email;
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }

  getUserId(): string | null {
    if (!this.userId) {
      const token = this.getToken();
      if (token) this.decodeToken(token);
    }

    return this.userId;
  }

  getEmail(): string | null {
    if (!this.email) {
      const token = this.getToken();
      if (token) this.decodeToken(token);
    }

    return this.email;
  }
}
