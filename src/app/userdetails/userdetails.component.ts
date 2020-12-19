import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {UserModel} from '../navbar/user.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  constructor(private service: UserService) { }
   user: UserModel = {
    name: '',
     id: 0,
     location: ''
   };
  ngOnInit(): void {
    this.service.getSelectedUser().subscribe(
      data => {
        this.user = data;
      }
    );
  }

}
