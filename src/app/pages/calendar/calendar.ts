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
import { NgToastService, NgToastComponent } from 'ng-angular-popup';

@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule, CommonModule, MatDialogModule, NgToastComponent],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})
export class Calendar implements OnInit {
  constructor(
    private auth: AuthService,
    private timeLogs: TimeLogService,
    private dialog: MatDialog,
    private toast: NgToastService
  ) {}

  @ViewChild('fullcalendar') calendarComponent!: FullCalendarComponent;

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
            const projectName = project.get(item.projectId);

            if (!projectName) {
              return;
            }

            return {
              id: item.id,
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
          this.toast.danger('Failed to Load Calendar.');
        }
      },
      error: (err) => {
        this.toast.danger(`Error in fetching data: ${err}`);

        if (this.calendarComponent && this.calendarComponent.getApi()) {
          this.calendarComponent.getApi().setOption('events', []);
        }
      },
    });
  }

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
      const deleteBtn = document.createElement('span');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.innerHTML = '<i class="bi bi-trash3-fill"></i>';

      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        this.deleteEvent(info);
      });

      const eventTitle = info.el.querySelector('.fc-event-title');

      if (eventTitle && !info.el.querySelector('.delete-btn')) {
        eventTitle.appendChild(deleteBtn);
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

  deleteEvent(info: any) {
    const id = info.event._def.publicId;

    this.timeLogs.deleteLogTime(id).subscribe({
      next: () => {
        info.event.remove();
        this.toast.success('Event Deleted Successfully.');
      },
      error: () => {
        this.toast.danger(`Failed to Delete Event: ${info.event._def.extendedProps.title}`);
      },
    });
  }
}
