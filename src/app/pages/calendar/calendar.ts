import { Component, ViewChild, OnInit } from '@angular/core';
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
import { LogDetails } from '../log-details/log-details';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule, CommonModule, MatDialogModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})
export class Calendar implements OnInit {
  constructor(
    private auth: AuthService,
    private timeLogs: TimeLogService,
    private dialog: MatDialog
  ) {}

  userId: number | null = 0;
  selectedView: 'dayGridMonth' | 'dayGridWeek' = 'dayGridMonth';

  ngOnInit() {
    this.userId = this.auth.getUserId();
    this.loadData();
  }

  loadData() {
    forkJoin({
      timeLogs: this.timeLogs.getAllTimeLogs(),
      projects: this.timeLogs.getAllProjects(),
    }).subscribe({
      next: (res: any) => {
        const { timeLogs, projects } = res;

        if (!timeLogs || !Array.isArray(timeLogs)) {
          console.error('Invalid TimeLogs data:', timeLogs);
          return;
        }

        if (!projects || !Array.isArray(projects)) {
          console.error('Invalid Projects data:', projects);
          return;
        }

        const project = new Map(projects.map((p: any) => [p.id, p.name]));

        this.logs = timeLogs
          .filter((x: any) => x.userId === this.userId)
          .map((item: any) => {
            const projectName = project.get(item.projectId) || 'Unknown Project';

            return {
              userId: item.userId,
              projectId: item.projectId,
              projectName: projectName,
              title: item.title || 'Untitled',
              description: item.description,
              date: new Date(item.date).toISOString(),
              hours: item.hours,
              billable: item.billable,
            };
          });

        if (this.calendarComponent && this.calendarComponent.getApi()) {
          this.calendarComponent.getApi().setOption('events', this.logs);
        } else {
          console.error('Calendar component not available');
        }
      },
      error: (err) => {
        console.error('Error fetching data:', err);

        if (this.calendarComponent && this.calendarComponent.getApi()) {
          this.calendarComponent.getApi().setOption('events', []);
        }
      },
    });
  }

  @ViewChild('fullcalendar') calendarComponent!: FullCalendarComponent;

  logs: any[] = [];
  calendarView: 'dayGridMonth' | 'dayGridWeek' = 'dayGridMonth';
  details: any;

  calendarOptions: CalendarOptions = {
    initialView: this.calendarView,
    plugins: [dayGrid, timeGrid, list, interaction],
    headerToolbar: {
      left: 'prev today next',
      center: 'title',
      right: 'dayGridMonth listMonth',
    },
    displayEventTime: false,
    events: [],
    eventClick: (data) => this.handleDateClick(data),
    fixedWeekCount: false,
    buttonText: {
      today: 'Today',
      month: 'Month View',
      week: 'Week View',
      listWeek: 'Week Logs',
      listMonth: 'Month Logs',
    },
    eventDidMount: (info) => {
      const eventTitle = info.el.querySelector('.fc-event-title');

      if (eventTitle && !eventTitle.querySelector('span')) {
        const text = eventTitle.textContent;
        eventTitle.textContent = '';

        const span = document.createElement('span');
        span.textContent = text;
        eventTitle.appendChild(span);
      }
    },
    selectable: true,
    editable: true,
    height: 'auto',
  };

  toggleView(view: 'dayGridMonth' | 'dayGridWeek') {
    const calendar = this.calendarComponent.getApi();

    calendar.changeView(view);
    calendar.setOption('initialView', view);
    calendar.setOption('headerToolbar', {
      right: view === 'dayGridWeek' ? 'dayGridWeek listWeek' : 'dayGridMonth listMonth',
    });
    this.selectedView = view;
  }

  handleDateClick(info: any) {
    const event = info.event;

    const details = {
      title: event.title,
      project: event.extendedProps.projectName,
      description: event.extendedProps?.description,
      date: event.startStr,
      hours: event.extendedProps?.hours,
      billable: event.extendedProps?.billable,
    };

    this.dialog.open(LogDetails, {
      width: '400px',
      data: details,
    });
  }
}
