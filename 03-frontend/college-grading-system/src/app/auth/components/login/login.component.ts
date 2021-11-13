import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/users/model/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  roleId: string;
  email: string;
  password: string;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('login works');
    if (
      this.usersService.authenticate(
        parseInt(this.roleId),
        this.email,
        this.password
      )
    ) {
      console.log('Logged in');
    } else {
      console.error('Failed to log in');
    }
  }
}
