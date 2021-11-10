import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../model/users';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  userId: number;
  user: Users = new Users();

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.usersService.getUser(this.userId).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => console.log(error)
    );
  }

  getUser() {
    this.usersService.createUser(this.user).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    console.log(this.user);
    this.getUser();
  }
}
