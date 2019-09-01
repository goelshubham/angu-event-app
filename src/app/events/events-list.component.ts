import {Component, OnInit} from '@angular/core';
import {EventService} from './event-services/event-service';
import {IEvent} from './event.model';


declare let toastr

@Component({

  /*selector: 'app-events-list',*/
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <app-event-thumbnail (click)="handleThumbnailClick(event.name)" [event]='event'></app-event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  title = 'angu-event-app';
  events: IEvent[]

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.events = this.eventService.getAllEventList();
  }

  handleThumbnailClick(eventName) {
    toastr.success(eventName);
  }
}
