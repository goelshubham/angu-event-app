import { Component, OnInit } from '@angular/core';
import { AuthService} from '../login/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [`
  .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
  `]
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
