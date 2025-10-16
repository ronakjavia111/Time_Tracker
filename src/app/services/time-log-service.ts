import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class TimeLogService {
  constructor(private httpClient: HttpClient) {}

  baseUrl: string = 'http://localhost:3000';

  getAllUsers() {
    return this.httpClient.get<any>(`${this.baseUrl}/users`);
  }

  getAllTimeLogs() {
    return this.httpClient.get<any>(`${this.baseUrl}/timelogs`);
  }

  getAllProjects() {
    return this.httpClient.get<any>(`${this.baseUrl}/projects`);
  }

  addLogTime(payload: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/timelogs`, payload);
  }
}
