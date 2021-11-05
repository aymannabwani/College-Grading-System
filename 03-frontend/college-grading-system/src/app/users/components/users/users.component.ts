import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../model/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Users[] = [];
  currentroleId!: number;
  searchMode: boolean;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.usersList();
    });
  }

  usersList() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchUsers();
    } else {
      this.hadleUsers();
    }
  }

  handleSearchUsers() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    // search  among Users for the User using the keyword
    this.userService.searchUsers(theKeyword).subscribe((data) => {
      this.users = data;
    });
  }

  hadleUsers() {
    // check if roleId available
    const hasRoleId: boolean = this.route.snapshot.paramMap.has('roleId');

    if (hasRoleId) {
      // get roleCategoryId and convert to number using + symbol
      this.currentroleId = +this.route.snapshot.paramMap.get('roleId');
      console.log('hasRoleID' + this.currentroleId);
    }
    // if no roleId available then set to roleId 1
    else {
      this.currentroleId = 1;
    }

    // get the users for the given roleCategoryId

    this.userService.getUsersList(this.currentroleId).subscribe((data) => {
      this.users = data;
      console.log(data);
      console.log('test1');
    });
  }
}
