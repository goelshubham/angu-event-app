import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import {EventsThumbnailComponent} from './events/events-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import {EventService} from './events/event-services/event-service';
import { EventDetailsComponent } from './event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import { CreateEventsComponent } from './create-events/create-events.component';
import { LoginComponent } from './login/login.component';
import { AuthService} from './login/auth.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [EventService, AuthService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
