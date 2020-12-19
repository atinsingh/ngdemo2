import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {UserModel} from './navbar/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usrData: Subject<UserModel[]> = new Subject();
  selectUser: Subject<UserModel> = new Subject<UserModel>();
  user: UserModel;

  data = [{
      id: 1,
      name: 'Adam Smith',
      location: 'Canada'
    },
    {
      id: 2,
      name: 'Jack Smith',
      location: 'Canada'
    },
    {
      id: 3,
      name: 'Jean Smith',
      location: 'Canada'
    }
  ];

  clickUser(user: UserModel): void {
    this.user = user;
    this.selectUser.next(user);
  }

  getData(): UserModel[] {
    return this.data;
  }

  getUsers(): Observable<UserModel[]> {
    return this.usrData;
  }

  getSimpleUser(): UserModel {
    return this.user;
  }

  constructor() {
    this.usrData.next(this.data);
  }

  getSelectedUser(): Observable<UserModel> {
    return this.selectUser.asObservable();
  }
}
