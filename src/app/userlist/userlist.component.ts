import { Component, OnInit } from '@angular/core';
import {UserModel} from '../navbar/user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  user: UserModel[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getData();
  }

}
