import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FullCalendarModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
