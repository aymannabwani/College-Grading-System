import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  thePageSize: number = 4;
  theTotalElements: number = 0;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUsers();
    this.route.paramMap.subscribe(() => {
      this.usersList();
    });
  }

  private getUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  updateUser(userId: number) {
    this.router.navigate(['update-user', userId]);
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe((data) => {
      console.log('delete user works');
      this.getUsers();
    });
  }

  usersList() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    console.log('searchMode: ' + this.searchMode);

    if (this.searchMode) {
      this.handleSearchUsers();
    } else {
      this.handleUsers();
    }
  }

  handleSearchUsers() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');
    const theUserId: number = +theKeyword;

    console.log('users component works');
    console.log(theKeyword + '/' + theUserId);

    // isNaN (is not a number)
    if (isNaN(theUserId) || theKeyword == '') {
      // search  among Users for the User using the keyword
      console.log(' if works');
      this.userService.searchUsers(theKeyword).subscribe((data) => {
        console.log(' inside works' + JSON.stringify(data));
        this.users = data;
      });
    } else {
      // search  among Users for the User using the userId
      console.log(' else works');
      this.userService.searchUsersId(theUserId).subscribe((data) => {
        this.users = data;
      });
    }
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
    if (this.currentRoleId == 0) {
      this.userService
        .getAllUsersListPaginate(this.thePageNumber - 1, this.thePageSize)
        .subscribe(this.processResult());
    } else {
      this.userService
        .getUsersListPaginate(
          this.thePageNumber - 1,
          this.thePageSize,
          this.currentRoleId
        )
        .subscribe(this.processResult());
    }
  }

  private processResult() {
    return (data: any) => {
      this.users = data._embedded.users;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }
}
