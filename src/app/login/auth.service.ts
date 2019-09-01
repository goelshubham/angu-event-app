import {Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 10,
      name: userName,
      phone: 7163499290,
      age: 29,
      userName: 'astha',
      password: '123'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
