import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEvent} from './event.model';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]"  class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>City: {{event?.location?.city}}</div>
      <div>Country: {{event?.location?.country}}</div>
      <div>Date: {{event?.date}}</div>
      <div [ngSwitch]="event?.time">
        <span *ngSwitchCase="'8:00 am'">Time: {{event?.time}} Early Start</span>
        <span *ngSwitchCase="'10:00 am'">Time: {{event?.time}} Late Start</span>
        <span *ngSwitchDefault>Time: {{event?.time}} Normal Start</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
      <br>
      <button class="btn btn-primary" (click)="handleClickMe()">Register</button>
    </div>
  `
})

export class EventsThumbnailComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();

  handleClickMe() {
    console.log('hello in console');
    this.eventClick.emit(this.event.name);
  }
}
