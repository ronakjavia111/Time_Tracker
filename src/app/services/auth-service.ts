import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = 'http://localhost:3000/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.api}/login`, { email, password });
  }

  register(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.api}/register`, { email, password });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getAllUsers(){
    return this.http.get(`${this.api}/user`);
  }
}
