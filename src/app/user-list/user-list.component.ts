import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title: string = 'UserListComponent';
  users: User[];

  constructor() { }

  ngOnInit() {
  }

}
