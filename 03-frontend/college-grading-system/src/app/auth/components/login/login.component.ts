import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/users/model/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  roleIdAsString: string;
  email: string;
  password: number;
  roleId: number;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  onSubmit() {
    switch (this.roleIdAsString) {
      case 'Adminstrator':
        this.roleId = 1;
        break;
      case 'Teacher':
        this.roleId = 2;
        break;
      case 'Student':
        this.roleId = 3;
        break;
    }
    console.log(this.roleId, this.email, this.password);

    this.usersService.authenticate(this.roleId, this.email, this.password);
  }
}
