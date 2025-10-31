import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';

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
      { path: '', redirectTo: 'calendar', pathMatch: 'full' },
      {
        path: 'calendar',
        loadComponent: () => import('./pages/calendar/calendar.js').then((c) => c.Calendar),
        canActivate: [authGuard],
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
