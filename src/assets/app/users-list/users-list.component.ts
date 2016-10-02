import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user.model';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  title: string = 'UsersListComponent';
  users: User[];
  
  constructor() { }

  ngOnInit() {
  }

}
