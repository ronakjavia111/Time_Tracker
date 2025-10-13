import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-log-details',
  imports: [],
  templateUrl: './log-details.html',
  styleUrl: './log-details.css',
})
export class LogDetails {
  @Input() dataDetails: any = null;
  @Output() close = new EventEmitter();

  title = this.dataDetails?.title;
  description = this.dataDetails?.description;
  hours = this.dataDetails?.hours;
  billable = this.dataDetails?.billable;

  closePopup() {
    this.close.emit();
  }
}
