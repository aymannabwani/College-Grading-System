import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../model/users';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
})
export class StudentProfileComponent implements OnInit {
  student: Users = new Users();

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleUserDetails();
    });
  }

  handleUserDetails() {
    // get the "userId" param string and convert it to number using the "+" symbol
    const theUserId: number = +this.route.snapshot.paramMap.get('userId');
    this.usersService.getUser(theUserId).subscribe((data) => {
      this.student = data;
    });
  }
}
