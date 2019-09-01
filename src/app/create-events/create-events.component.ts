import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-events',
  template: `
  <h1>Create New Event</h1>
  <hr>
    <div class="col-md-6">

      Event Name:<input type="text" name="ename">
      <br/>
      City: <input type="text" name="city">
      <br/>
      Date: <input type="date" name="date">
      <br/>
      <br/>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-primary" (click)="cancel()"  >Cancel</button>
    </div>
  `,
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cancel() {
    this.router.navigate(['events/']);
  }

}
