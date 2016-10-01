import { Component, OnInit } from '@angular/core';

import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = {
    name: 'Nate'
  }

  message: string = `Welcome ${this.user.name}`;

  constructor() { }

  ngOnInit() {
  }

}
