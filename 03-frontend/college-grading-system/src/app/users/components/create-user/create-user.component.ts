import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../model/users';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: Users = new Users();

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  saveUser() {
    this.usersService.createUser(this.user).subscribe(
      (data) => {
        console.log(data);
        this.goToUsersList();
      },
      (error) => console.log(error)
    );
  }

  goToUsersList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }
}
