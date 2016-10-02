import { Component, OnInit } from '@angular/core';

import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title: string = "RegisterComponent";
  user: User;

  onSubmit(): void {
    console.log(this.user);
    this.user = {
      name: ''
    }
  }

  constructor() { 
    this.user = {
      name: ''
    }
  }

  ngOnInit() {
  }

}
