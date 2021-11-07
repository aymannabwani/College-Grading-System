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
  currentRoleId: number = 1;
  previousRoleId: number = 1;
  searchMode: boolean = false;

  // declare Pagination properties
  thePageNumber: number = 1;
  thePageSize: number = 2;
  theTotalElements: number = 0;

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
      this.handleUsers();
    }
  }

  handleSearchUsers() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    console.log('users component works');
    // search  among Users for the User using the keyword
    this.userService.searchUsers(theKeyword).subscribe((data) => {
      this.users = data;
    });
  }

  handleUsers() {
    // check if roleId available
    const hasRoleId: boolean = this.route.snapshot.paramMap.has('roleId');

    if (hasRoleId) {
      // get roleCategoryId and convert to number using + symbol
      this.currentRoleId = +this.route.snapshot.paramMap.get('roleId');
      console.log('hasRoleID' + this.currentRoleId);
    }
    // if no roleId available then set to roleId 1
    else {
      this.currentRoleId = 1;
    }

    //
    // check if we have different Role than previous
    // Angular will reuse a component if it's recently viewed
    //

    // check if we have different Role than previous
    // then set thePageNumber back to 1
    if (this.previousRoleId != this.currentRoleId) {
      this.thePageNumber = 1;
    }
    this.previousRoleId = this.currentRoleId;
    console.log(
      `currentRoleId=${this.currentRoleId}, thePageNumber=${this.thePageNumber}`
    );

    // get the users for the given roleCategoryId

    this.userService
      .getUsersListPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        this.currentRoleId
      )
      .subscribe(this.processResult());
  }

  processResult() {
    return (data: any) => {
      this.users = data._embedded.users;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }
}
