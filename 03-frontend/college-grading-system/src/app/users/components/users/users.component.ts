import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../model/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Users[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.usersList();
  }

  usersList() {
    this.userService.getUsersList().subscribe((data) => {
      this.users = data;
      console.log(data);
      console.log('test1');
    });
  }
}
