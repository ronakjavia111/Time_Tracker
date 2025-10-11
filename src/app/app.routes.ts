import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';
import { Register } from './auth/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: Login, canActivate: [guestGuard] },
  {
    path: 'register',
    component: Register,
    // loadComponent: () => import('./auth/register/register.js').then((r) => r.Register),
    canActivate: [guestGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.js').then((a) => a.Dashboard),
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: 'login' },
];
