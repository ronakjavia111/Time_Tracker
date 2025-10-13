import { Component, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGrid from '@fullcalendar/daygrid';
import timeGrid from '@fullcalendar/timegrid';
import list from '@fullcalendar/list';
import interaction from '@fullcalendar/interaction';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service';
import { TimeLogService } from '../../services/time-log-service';
import { forkJoin } from 'rxjs';
import { Log } from '../../interfaces/log';
import { LogDetails } from '../log-details/log-details';

@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule, CommonModule, LogDetails],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})
export class Calendar {
  constructor(private auth: AuthService, private timeLogs: TimeLogService) {}

  userId: number = 0;

  ngOnInit() {
    this.loadData();
    this.userId = this.fetchUserIdFromToken();
  }

  fetchUserIdFromToken(): number {
    const token = this.auth.getToken();
    if (!token) return 0;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.id || 0;
    } catch (error) {
      console.error('Error decoding token:', error);
      return 0;
    }
  }

  loadData() {
    forkJoin({
      timeLogs: this.timeLogs.getAllTimeLogs(),
    }).subscribe({
      next: (res: any) => {
        console.log('userid', this.userId);
        this.logs = res.timeLogs
          .filter((x: Log) => x.userId === this.userId)
          .map((item: any) => {
            return {
              userId: item.userId,
              projectId: item.projectId,
              title: item.title,
              description: item.description,
              date: item.date,
              hours: item.hours,
              billable: item.billable,
            };
          });
        console.log('Data:', this.logs);

        this.calendarComponent.getApi().setOption('events', this.logs);
      },
      error: (err) => console.error('Error fetching data', err),
    });
  }

  @ViewChild('fullcalendar') calendarComponent!: FullCalendarComponent;

  logs: Log[] = [];
  calendarView: 'dayGridMonth' | 'dayGridWeek' = 'dayGridMonth';
  showPopup: boolean = false;
  details: any;

  calendarOptions: CalendarOptions = {
    initialView: this.calendarView,
    plugins: [dayGrid, timeGrid, list, interaction],
    headerToolbar: {
      left: 'prev today next',
      center: 'title',
      right: 'dayGridMonth listMonth',
    },
    fixedWeekCount: false,
    dateClick: (data) => this.handleDateClick(data),
    buttonText: {
      today: 'Today',
      month: 'Month View',
      week: 'Week View',
      listWeek: 'Week Logs',
      listMonth: 'Month Logs',
    },
    events: this.logs,
    selectable: true,
    editable: true,
  };

  toggleView(view: 'dayGridMonth' | 'dayGridWeek') {
    const calendar = this.calendarComponent.getApi();

    calendar.changeView(view);
    calendar.setOption('initialView', view);
    calendar.setOption('headerToolbar', {
      right: view === 'dayGridWeek' ? 'dayGridWeek listWeek' : 'dayGridMonth listMonth',
    });
  }

  handleDateClick(data: any) {
    console.log('Clicked');

    this.details = {
      title: data.title,
      description: data.description,
      hours: data.hours,
      billable: data.billable,
    };

    this.showPopup = true;
  }

  handlePopUp() {
    this.showPopup = false;
  }
}
