import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { jwtInterceptor } from './core/interceptors/jwt-interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideNgToast } from 'ng-angular-popup';
import {} from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideNativeDateAdapter(),
    provideNgToast({
      duration: 3000,
      position: 'toaster-top-right',
      maxToasts: 3,
      width: 400, 
      showProgress: true,
      dismissible: true, 
      showIcon: true,
      enableAnimations: true,
    }),
  ],
};
