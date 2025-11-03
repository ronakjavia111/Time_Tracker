import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth-service';
import { Project } from '../interfaces/project';
import { combineLatest, map, Observable } from 'rxjs';
import { Log } from '../interfaces/log';

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

  addLogTime(payload: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/timelogs`, payload);
  }

  updateLogTime(payload: any) {
    return this.httpClient.patch<any>(`${this.baseUrl}/timelogs`, payload);
  }

  deleteLogTime(id: any) {
    return this.httpClient.delete<any>(`${this.baseUrl}/timelogs`, { body: { id: id } });
  }

  addProject(payload: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/project`, payload);
  }

  deleteProject(id: any) {
    return this.httpClient.delete<any>(`${this.baseUrl}/project`, { body: { id: id } });
  }

  fetchAllProjects(): Observable<Project[]> {
    const projects = this.httpClient.get<any>(`${this.baseUrl}/projects`);

    return projects.pipe(
      map((data: Project[]) => {
        if (!data || !Array.isArray(data)) {
          console.error('Invalid Projects data:', data);
          return [];
        }

        return data.filter((x) => x.userId == this.auth.getUserId());
      })
    );
  }

  fetchAllTimeLogs(): Observable<any[]> {
    const timelogs = this.httpClient.get<any>(`${this.baseUrl}/timelogs`);
    const projects = this.fetchAllProjects();

    return combineLatest([timelogs, projects]).pipe(
      map(([timelogs, projects]) => {
        if (!Array.isArray(timelogs) || !Array.isArray(projects)) {
          console.error('Invalid data:', { timelogs, projects });
          return [];
        }

        const userId = this.auth.getUserId();
        const userProjectIds = projects.filter((p) => p.userId === userId).map((p) => p.id);

        return timelogs.filter(
          (log) => log.userId === userId && userProjectIds.includes(log.projectId)
        );
      })
    );
  }
}
