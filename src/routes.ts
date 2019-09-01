import {EventsListComponent} from './app/events/events-list.component';
import {EventDetailsComponent} from './app/event-details/event-details.component';
import {CreateEventsComponent} from './app/create-events/create-events.component';
import {Routes} from '@angular/router';
import {LoginComponent} from './app/login/login.component';

export const appRoutes: Routes = [
  {path: 'events', component: EventsListComponent},
  {path: 'events/new', component: CreateEventsComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
]
