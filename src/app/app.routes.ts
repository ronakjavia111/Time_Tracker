import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';
import { LogTime } from './pages/log-time/log-time';
import { Calendar } from './pages/calendar/calendar.js';
import { DailyLog } from './pages/daily-log/daily-log';
import { WeeklyLog } from './pages/weekly-log/weekly-log';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: Login, canActivate: [guestGuard] },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.js').then((r) => r.Register),
    canActivate: [guestGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.js').then((a) => a.Dashboard),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'log-time', pathMatch: 'full' },
      { path: 'log-time', component: LogTime },
      { path: 'daily-log', component: DailyLog },
      { path: 'weekly-log', component: WeeklyLog },
      {
        path: 'calendar',
        // loadComponent: () => import('./pages/calendar/calendar.js').then((c) => c.Calendar),
        component: Calendar,
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
