import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../model/users';

@Component({
  selector: 'app-my-class',
  templateUrl: './my-class.component.html',
  styleUrls: ['./my-class.component.css'],
})
export class MyClassComponent implements OnInit {
  users: Users[] = [];
  currentRoleId: number = 3;
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

  usersList() {
    this.userService
      .getUsersListPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        this.currentRoleId
      )
      .subscribe(this.processResult());
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
