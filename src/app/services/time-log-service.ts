import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth-service';
import { Project } from '../interfaces/project';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeLogService {
  constructor(private httpClient: HttpClient, private auth: AuthService) {}

  baseUrl: string = 'http://localhost:3000';
  defaultProject = {
    id: 0,
    name: '',
    userId: '',
  };

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

  deleteLogTime(id: any) {
    return this.httpClient.delete<any>(`${this.baseUrl}/timelogs/${id}`);
  }

  fetchAllProjects(): Observable<Project[]> {
    return this.getAllProjects().pipe(
      map((data: Project[]) => {
        if (!data || !Array.isArray(data)) {
          console.error('Invalid Projects data:', data);
          return [];
        }
        return data.filter((x) => x.userId === this.auth.getUserId());
      })
    );
  }
}
