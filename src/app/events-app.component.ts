import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <app-nav></app-nav>
    <!--<app-events-list></app-events-list>-->
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'angu-event-app';
}
