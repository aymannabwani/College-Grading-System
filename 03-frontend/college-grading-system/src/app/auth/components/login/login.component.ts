import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  login() {
    if(this.usersService.authenticate(this.roleId, this.username, this.password)) {
      console.log('Logged in');
    } else {
      console.error('Failed to log in');
    }
}
